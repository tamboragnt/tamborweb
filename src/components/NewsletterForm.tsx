import { useState, useRef } from 'react';

type FormState = 'idle' | 'loading' | 'success' | 'error';

const RATE_LIMIT_MS = 60000;
const FORM_ACTION = 'https://app.loops.so/api/newsletter-form/cmklcov1l0d170izwahlnu3mb';

function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMessage, setErrorMessage] = useState('Oops! Something went wrong, please try again');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const now = Date.now();
    const prev = localStorage.getItem('loops-form-timestamp');
    if (prev && Number(prev) + RATE_LIMIT_MS > now) {
      setFormState('error');
      setErrorMessage('Too many signups, please try again in a little while');
      return;
    }
    localStorage.setItem('loops-form-timestamp', String(now));

    setFormState('loading');

    const body = 'userGroup=&mailingLists=&email=' + encodeURIComponent(email);

    try {
      const res = await fetch(FORM_ACTION, {
        method: 'POST',
        body,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      });

      if (res.ok) {
        setFormState('success');
        setEmail('');
      } else {
        const data = await res.json();
        setFormState('error');
        setErrorMessage(data.message || res.statusText);
      }
    } catch (err: unknown) {
      if (err instanceof Error && err.message === 'Failed to fetch') {
        setFormState('error');
        setErrorMessage('Too many signups, please try again in a little while');
        return;
      }
      setFormState('error');
      if (err instanceof Error && err.message) {
        setErrorMessage(err.message);
      }
      localStorage.setItem('loops-form-timestamp', '');
    }
  };

  const handleBack = () => {
    setFormState('idle');
    setErrorMessage('Oops! Something went wrong, please try again');
  };

  return (
    <div className="mt-6 flex flex-col items-center">
      {formState === 'idle' && (
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col items-center w-full"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full max-w-[300px] min-w-[100px] bg-white text-black text-sm border border-gray-300 rounded-md px-3 py-2 mb-2.5 shadow-sm focus:outline-none focus:ring-2 focus:ring-tambor-red/40 focus:border-tambor-red transition-all duration-300"
          />
          <button
            type="submit"
            className="w-full max-w-[300px] h-[38px] bg-gradient-to-r from-tambor-red to-tambor-red-light text-white text-sm font-medium rounded-md shadow-sm hover:opacity-90 transition-opacity duration-300 cursor-pointer"
          >
            Subscribe
          </button>
        </form>
      )}

      {formState === 'loading' && (
        <button
          type="button"
          disabled
          className="w-full max-w-[300px] h-[38px] bg-gradient-to-r from-tambor-red to-tambor-red-light text-white text-sm font-medium rounded-md shadow-sm cursor-wait"
        >
          Please wait...
        </button>
      )}

      {formState === 'success' && (
        <div className="flex flex-col items-center">
          <p className="text-white text-sm">Awesome!</p>
          <button
            type="button"
            onClick={handleBack}
            className="text-gray-400 text-sm mt-2.5 bg-transparent border-none cursor-pointer hover:underline"
          >
            &larr; Back
          </button>
        </div>
      )}

      {formState === 'error' && (
        <div className="flex flex-col items-center">
          <p className="text-red-600 text-sm">{errorMessage}</p>
          <button
            type="button"
            onClick={handleBack}
            className="text-gray-400 text-sm mt-2.5 bg-transparent border-none cursor-pointer hover:underline"
          >
            &larr; Back
          </button>
        </div>
      )}
    </div>
  );
}

export default NewsletterForm;
