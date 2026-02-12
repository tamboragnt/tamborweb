import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { ArrowLeft, Shield, FileText, Scale, Eye } from 'lucide-react';

function LegalPage() {
  const [activeTab, setActiveTab] = useState<'terms' | 'privacy'>('terms');

  return (
    <div className="min-h-screen bg-white font-poppins">
      <SEOHead
        title="Legal - Terms of Use & Privacy Statement | Tambor"
        description="Tambor's legal policies including Terms of Use and Privacy Statement. Our commitment to transparency, privacy, and responsible AI practices."
        canonical="https://tambor.ai/legal"
        noindex
      />
      {/* Header */}
      <div className="bg-gradient-to-br from-tambor-navy via-tambor-blue-dark to-tambor-navy py-16 lg:py-24 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-tambor-red opacity-10 rounded-full blur-3xl animate-float animate-morph" style={{ top: '20%', left: '10%' }}></div>
          <div className="absolute w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-tambor-blue opacity-15 rounded-full blur-3xl animate-float animate-morph" style={{ top: '60%', right: '15%', animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <Link 
            to="/" 
            className="inline-flex items-center gap-3 text-white/80 hover:text-white transition-colors duration-300 mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="font-medium">Back to Home</span>
          </Link>
          
          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8 animate-shimmer">
              <Scale className="w-5 h-5 text-tambor-red animate-pulse" />
              <span className="text-white/90 font-medium">Legal Information</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 lg:mb-8 leading-tight px-4 sm:px-0">
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Tambor
              </span>
              <br />
              <span className="bg-gradient-to-r from-tambor-red to-tambor-red-light bg-clip-text text-transparent">
                Legal
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light px-4 sm:px-0">
              Our commitment to transparency, privacy, and responsible AI practices
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-16">
          <div className="bg-gray-100 rounded-2xl p-2 inline-flex gap-2">
            <button
              onClick={() => setActiveTab('terms')}
              className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'terms'
                  ? 'bg-white text-tambor-blue shadow-lg transform scale-105'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <FileText className="w-5 h-5" />
              Terms of Use
            </button>
            <button
              onClick={() => setActiveTab('privacy')}
              className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'privacy'
                  ? 'bg-white text-tambor-red shadow-lg transform scale-105'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Shield className="w-5 h-5" />
              Privacy Statement
            </button>
          </div>
        </div>

        {/* Terms of Use Tab */}
        {activeTab === 'terms' && (
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-tambor-blue to-tambor-blue-light flex items-center justify-center shadow-xl">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-tambor-navy mb-2">Terms of Use</h2>
              <p className="text-base sm:text-lg text-gray-600 font-light">Last updated: June 5, 2025</p>
            </div>
          </div>
          
          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 border border-gray-100">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-tambor-navy mb-4">Introduction</h3>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p><strong>You, Us, and this Document.</strong> This document relates to the use of the Tambor website, platform, application, products, and/or services that we make available (collectively, the "Service"). The Service allows you to, among other things, generate AI-powered audience and narrative insights. The Service is provided to you by us, Driver Seat AI, Inc., a Delaware corporation ("we," "us,\" or \"our"). Your use of the Service is subject to this document, and other documents, guidelines, or rules that we may implement and update from time to time (collectively, these "Terms"). In particular, your use of the Service may additionally be subject to a separate service agreement as between you and us.</p>
                    
                    <p><strong>Accepting This Document.</strong> Please read these Terms carefully and make sure that you understand them. If you do not understand these Terms, or if you do not wish to accept these Terms, or any part of them, then you may not use the Service.</p>
                    
                    <p><strong>Preliminary Notice about Dispute Resolution.</strong> NOTICE REGARDING DISPUTE RESOLUTION: These Terms contain provisions about how claims between you and us are resolved, including an agreement and obligation to arbitrate disputes, which, with limited exceptions, requires you to submit claims you may have against us to binding arbitration. This means that, subject to the arbitration clauses below, you will only be permitted to pursue any claims against us on an individual basis, and not as part of any class or representative action or proceeding, and you will only be permitted to seek relief on an individual basis.</p>
                    
                    <p><strong>Your Information.</strong> Our Privacy Statement explains how we treat your personal data. You should make sure to read and fully understand the Privacy Statement before using the Service. We may change the Privacy Statement (and our use of your personal data) from time to time in our discretion.</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-tambor-navy mb-4">Who Can Use the Service?</h3>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p><strong>Age Requirement.</strong> You must be at least 18 years old to use the Service.</p>
                    
                    <p><strong>Businesses.</strong> If you are using the Service on behalf of a business entity or other organization, you must have the authority to enter into these Terms on behalf of the entity or organization, and you represent that the entity or organization accepts these Terms.</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-tambor-navy mb-4">Accounts and Authorization</h3>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p><strong>Accounts.</strong> You may need to create an account on the Service (an "Account") to use the Service to its fullest extent. All information you provide to us when creating an Account must be accurate, and you must update it when that information changes. You cannot use another person's Account. You agree to (a) provide complete and accurate information upon registration, (b) be responsible for maintaining the security of the Account, log-in information, and password(s), including all user information, (c) be responsible for any activities occurring on your Account, (d) take all reasonably necessary steps to protect the Account password from loss, theft, or unauthorized disclosure, and (e) not allow any other person to access or use your Account. You must let us know immediately if you learn of any breach of the security of your Account. We may, at our discretion, block or terminate any account we reasonably believe is being accessed by unauthorized individuals. No refunds or credits will be due should we take these actions.</p>
                    
                    <p><strong>Authorization.</strong> Your permission to use the Service is subject to our discretion, as well as these Terms, and we can terminate your permission to use the Service at any time and for any or no reason. You may not use, or attempt to use, the Service after we have terminated your permission, though the provisions of these Terms will continue to otherwise be in effect.</p>
                    
                    <p><strong>APIs.</strong> You and/or your account may be assigned a specific Application Programming Interface ("API"), or collection of APIs that may be used only by you and your business in accordance with these Terms and any separate service agreement that may exist. You cannot use another person's API. Furthermore, you agree to (a) be responsible for maintaining the security of your API(s), (b) be responsible for any activities occurring on your API(s), (c) take all reasonably necessary steps to protect your API(s) from loss, theft, or unauthorized disclosure or use, and (d) not allow any other person outside of your organization and in accordance with your written agreements with us to access or use your API(s). We may, at our discretion, block or terminate any API that we reasonably believe is being accessed by unauthorized individuals. No refunds or credits will be due should we take these actions.</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-tambor-navy mb-4">Use of and Content on the Service</h3>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p><strong>Content.</strong> The Service contains a wide range of content, including software, media, generative artificial intelligence generated data, and other data and materials, which may be provided by you, us, generative artificial intelligence, or third-parties (collectively, "Content"). Content is the responsibility of the person who submits the Content to the Service, and we are under no responsibility to any person to host or distribute any Content. We have the right to refuse to accept, remove, or disable access to any Content for any or no reason in our sole discretion, with or without notice to any person.</p>
                    
                    <p><strong>Generative Content.</strong> The term "Generative Content" as used in these Terms refers specifically to Content on the Service that is generated by generative artificial intelligence. These specifically include many of the insights, data, and other information you may obtain from the Service. The Content that makes up the rest of the Service, including the website and the software, architecture, brands, texts, organization, and other parts of the Service other than such artificially generated data, materials, and insights are explicitly NOT Generative Content hereunder.</p>
                    
                    <p><strong>Use of Generative Content.</strong> Without limitation of the other provisions hereof, you may not use any Generative Content in a way that is unethical or irresponsible, or which implies any form of endorsement by us or our affiliates of your use of the Generative Content. Note that any and all Content on the Service may be subject to applicable intellectual property laws and may only be used in strict accordance with these Terms and applicable law. Because Generative Content is automatically created using generative artificial intelligence, you acknowledge and understand that such Generative Content is experimental, may contain errors, and may have other issues. We undertake no obligation to review Generative Content before it is made available on the Service or provided to you, and in fact it may not be reviewed in any way or for any purpose before it is made available or provided. Accordingly, if you use Generative Content for any purpose, you acknowledge and accept all the liabilities and risks inherent in the use of the same.</p>
                    
                    <p><strong>General Limitations.</strong> You can only use the Service in accordance with these Terms. Using the Service does not give you ownership over, or any rights to, any Content on the Service or available through the Service except as explicitly stated in this document (for example, data that you provide to us or the Service and content generated specifically for you from the same, as more fully set forth below).</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-tambor-navy mb-4">Further Limitations on Use</h3>
                  <div className="text-gray-600 leading-relaxed">
                    <p className="mb-4">Your use of the Service and any Content on the Service is subject to the following restrictions:</p>
                    <ul className="space-y-2 list-disc list-inside ml-4">
                      <li>You may not access, copy, modify, publish, transmit, distribute, display, reproduce, transfer, sell, make derivative works of, broadcast, license, or otherwise use any part of the Service or any Content except as is explicitly permitted in these Terms.</li>
                      <li>You may not use the Service in any way that is a violation of any applicable laws, in any way that may make us liable in any way, or in any way that would cause harm to any other person.</li>
                      <li>You may not circumvent, disable, interfere with, or fraudulently use the Service (or attempt to do any of these things), including any security features of the Service or technical limitations of the Service that may, among other things, prevent or restrict copying or other use of Content or limit the use of the Service.</li>
                      <li>You may not collect any information from the Service that may be used to identify any person, nor may you use the Service to stalk or harass anyone.</li>
                      <li>You may not use the Service in connection with any viruses or other content that interrupts, destroys, limits, or monitors any systems.</li>
                      <li>You may not reverse engineer, decompile, disassemble, or copy the Service, or derive source code, object code, or trade secrets from the Service, or create any derivative works of the Service.</li>
                      <li>You may not use the Service for any unsolicited promotional or commercial content, or to engage in any form of mass solicitation, except in strict compliance with applicable law.</li>
                      <li>You may not misuse any reporting, flagging, complaint, dispute, or other features or processes of or relating to the Service.</li>
                      <li>You may not run any contests on or through the Service.</li>
                      <li>You may not use the Service to create any obscene, vulgar, pornographic, illegal, unlawful, infringing, defamatory, fraudulent, harassing, abusive, threatening, hateful, inflammatory, or otherwise inappropriate content, as we may determine in our discretion.</li>
                      <li>You may not use the Service in any way that creates an unreasonable load on our System, as determined in our discretion.</li>
                      <li>You may not use the Service in order to build a product or service that competes with the Service.</li>
                      <li>You may not use the Service to provide services to third-parties, except subject to a specific written and signed agreement setting forth the terms for the same.</li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-tambor-navy mb-4">Your Content</h3>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>Any content that you upload, submit, stream, or otherwise make available (collectively, "upload") on or through the service, including any interactions you make with or through the Service, and your profile and Account information, is referred to herein as "Your Content." You are entirely responsible for Your Content and you will be solely responsible for all the consequences of uploading Your Content. We may use both manual and automated systems that review and analyze Your Content to ensure that it complies with these Terms.</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-tambor-navy mb-4">Payments, Memberships, Subscriptions, and Fees</h3>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p><strong>Generally.</strong> Occasionally, to the extent we choose to make it available, we may require you to make payments in order to access certain Content or features on the Service. We may set the prices for any of these at our discretion and change them at our discretion, including the terms for payments and the basis for access to the Content or features.</p>
                    
                    <p><strong>Forms of Payment.</strong> You may be required to provide us, or our payment processors, partners, or affiliates, with certain information to allow us or them to process and authorize your payments. All information you provide must be accurate and must be your information.</p>
                    
                    <p><strong>Subscriptions.</strong> All memberships and subscriptions automatically renew upon expiration, unless you cancel your membership or subscription before the end of the then current membership or subscription period. You acknowledge and agree that we (or our payment processors, partners, or affiliates) may charge the payment method on file for these renewals.</p>
                    
                    <p><strong>Refunds.</strong> Due to the nature of the Service, being, in particular, a digital service, we only issue refunds on a case-by-case basis in our discretion, and only when there is a provable issue with the Content or feature that you have received. Refunds are not available for any Content or feature that you have already accessed.</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-tambor-navy mb-4">Intellectual Property Claims</h3>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p><strong>Respect Third Party Intellectual Property.</strong> We respect the intellectual property rights of others. This means that you cannot use the Service in connection with the infringement of any person's copyrights, trademarks, or other intellectual or proprietary property or rights.</p>
                    
                    <p><strong>Digital Millennium Copyright Act.</strong> We comply with the notice and take-down procedures of the Digital Millennium Copyright Act codified in Section 512 of Title 17 of the United States Code. Takedown notices and counter-notices sent in accordance with the Copyright Act may be emailed to legal@tambor.ai, or sent to our Copyright Agent at 705 Gold Lake Drive, Suite 250, Folsom, California 95630, or you may call +1-857-847-4648.</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-tambor-navy mb-4">Warranty Disclaimer</h3>
                  <div className="text-gray-600 leading-relaxed">
                    <p>OTHER THAN AS EXPRESSLY STATED IN THESE TERMS OR AS REQUIRED BY LAW, THE SERVICE IS PROVIDED "AS IS" AND WE DO NOT MAKE ANY SPECIFIC COMMITMENTS OR WARRANTIES ABOUT THE SERVICE. FOR EXAMPLE, WE DO NOT MAKE ANY WARRANTY ABOUT THE CONTENT, THE SPECIFIC FEATURES OF THE SERVICE, OR THE ACCURACY, RELIABILITY, OR AVAILABILITY OF ANY PART OF THE SERVICE OR CONTENT, OR THE ABILITY OF THE SERVICE TO MEET YOUR NEEDS OR EXPECTATIONS.</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-tambor-navy mb-4">Limitation of Liability</h3>
                  <div className="text-gray-600 leading-relaxed">
                    <p>EXCEPT AS REQUIRED BY APPLICABLE LAW, WE ARE NOT AND SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES (EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES) RESULTING FROM ANY ASPECT OF YOUR USE OF THE SERVICE, INCLUDING ANY CLAIMS FOR LOST PROFITS, REVENUES, BUSINESS OPPORTUNITIES, GOODWILL, OR ANTICIPATED SAVINGS.</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-tambor-navy mb-4">Disputes</h3>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p><strong>General Law and Jurisdiction.</strong> Subject to the arbitration provisions below, to the maximum extent permitted by law, these Terms as well as any claim, cause of action, or dispute that may arise between you and us, are governed by the laws of the State of California without regard to conflict of law provisions. YOU AGREE TO SUBMIT AND CONSENT TO THE PERSONAL AND EXCLUSIVE JURISDICTION IN, AND THE EXCLUSIVE VENUE OF THE COURTS IN LOS ANGELES, CALIFORNIA, FOR ANY DISPUTE BETWEEN YOU AND US.</p>
                    
                    <p><strong>Arbitration.</strong> Any controversies, disputes, actions, causes of action or other claims between you and us arising out of or relating to these Terms, or the breach, termination, or validity hereof or your use of the Service shall be finally settled by binding arbitration before a single neutral arbitrator in accordance with the JAMS Streamlined Arbitration Rules.</p>
                    
                    <p><strong>Class Waiver.</strong> YOU AGREE THAT YOU MAY BRING CLAIMS ONLY IN YOUR INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE ACTION.</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-tambor-navy mb-4">Contact Information</h3>
                  <div className="text-gray-600 leading-relaxed">
                    <p>For questions about these Terms of Use, please contact us at legal@tambor.ai or at 705 Gold Lake Drive, Suite 250, Folsom, California 95630, or call +1-857-847-4648.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        )}

        {/* Privacy Statement Tab */}
        {activeTab === 'privacy' && (
        <div>
          <div className="flex items-center gap-4 mb-12">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-tambor-red to-tambor-red-light flex items-center justify-center shadow-xl">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-tambor-navy mb-2">Privacy Statement</h2>
              <p className="text-base sm:text-lg text-gray-600 font-light">Last updated: June 10, 2025</p>
            </div>
          </div>
          
          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 border border-gray-100">
              <div className="space-y-8">
                <div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    This document describes how we collect, use, and treat your information that we collect while you use our services. The information we collect and process depends on how you use our Service, but includes, and is not limited to, information collected through our website, by other interactions with us, including but not limited to emails and business transactions, and through other services.
                  </p>
                  
                  <p className="text-gray-600 leading-relaxed">
                    In this Statement, your information and data is collectively referred to as "user information." We use the term "process" to mean any operation or set of operations performed on user information, whether by automated means or otherwise, including, without limitation, handling, collecting, storing, recording, organizing, structuring, adapting, altering, retrieving, consulting, using, disclosing, disseminating (or otherwise making available), combining, erasing, or destroying.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-tambor-navy mb-4">What User Information Do We Collect?</h3>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>When generally visiting and using our services, we and/or our third-party service providers may collect usage information, technical information, and marketing related data, including login frequency, feature usage (e.g., API calls, content queries, and dashboard interactions), time spent on the platform (including time stamps and session durations), user preferences and settings, IP addresses, device types, browser information, operating system information, sources of acquisition, email campaign interactions, referral information, geographical area, and performance metrics. This user information is used to provide you our Service, and for analytical and security purposes.</p>
                    
                    <p>If you create an account on our website, we and/or our third-party service providers may collect additional information, including your name, username, company information, email address, and password. We may also collect further information about you or your company by accessing your company's website or other publicly available sources of information about you and/or your company. We may also collect the date you joined the service, the date and time of your logins, and IP addresses used to access the service. This user information is collected in order to provide you the services, and for analytical and security purposes.</p>
                    
                    <p>If you make any purchases or on through our service, we and/or our third-party service providers may collect billing information in order to process your transactions, including username, join date, joining IP address, referring URL, first name, last name, email address, payment method details, billing and mailing addresses, subscription information, transaction history, and login timestamps.</p>
                    
                    <p>If you communicate with us, we will collect such information in the communications, including the communications themselves, which may include, without limitation, support emails, chat logs, and call logs.</p>
                    
                    <p>If you upload materials to the service, we will collect such materials, including any user information in such materials.</p>
                    
                    <p>The above descriptions of information collected may not include every type or category of user information that we collect, but reflects our good faith belief as to the general categories and types of information that are collected.</p>
                    
                    <p>All the foregoing information may be collected by us directly, or through any of our third-party service providers. Such third-party service providers may maintain their own privacy policies or statements that you should ensure you review, as they may collect and use such additional user information in their discretion, and use it subject to their separate policies.</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-tambor-navy mb-4">Why Do We Collect User Information and How Do We Use It?</h3>
                  <div className="text-gray-600 leading-relaxed">
                    <p className="mb-4">We collect user information for a wide range of reasons, including, without limitation, as follows:</p>
                    <ul className="space-y-2 list-disc list-inside ml-4 mb-4">
                      <li>To provide you the services available on and through our services.</li>
                      <li>To collect information about the quality of traffic on our services for analysis, internal business, and security purposes.</li>
                      <li>To check for and protect against fraud, bots, or any other type of inorganic traffic for the benefit of users, affiliates, advertisers, and other parties.</li>
                      <li>To comply with legal obligations to which we may be subject (e.g., court orders, subpoenas, warrants, etc.).</li>
                      <li>To train our "AI," "machine learning," or other systems, models, or technologies.</li>
                      <li>For our legitimate interests or those of third parties in compliance with applicable law.</li>
                      <li>To respond to your inquiries and requests and to provide you information and access to the services that you have requested.</li>
                      <li>To provide a personalized experience to you, including by sending you marketing information, service recommendations, and communications about us.</li>
                      <li>To identify you across multiple devices.</li>
                      <li>Other compatible purposes for which the user information was collected.</li>
                    </ul>
                    
                    <p className="mb-4">We may also otherwise use your information with your consent or at your direction.</p>
                    
                    <p className="mb-4">Please note that certain user information may be used for multiple purposes and more than one reason for processing personal data may apply in each situation.</p>
                    
                    <p>You are not subject to decisions based solely on automated processing, including profiling, that produces legal effects concerning you. Automated processes however may be used to review traffic through our system to detect and block spam, fraud, and other unlawful or undesirable activities.</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-tambor-navy mb-4">Where Is User Information Stored?</h3>
                  <div className="text-gray-600 leading-relaxed">
                    <p>User information is stored on servers managed and operated by us, but which may be owned by third-parties or on servers managed and operated by our third-party service providers as described above. We use a variety of security technologies and procedures to protect user information from unauthorized access, use, or disclosure. We may use United States based cloud servers for the hosting and storing of user information, or other reasonable alternatives in our discretion.</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-tambor-navy mb-4">How Long Is User Information Stored?</h3>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>We maintain account information for at least as long as you maintain your account with us, and potentially without time limit thereafter. API query content is maintained for a period of time that is usually less than one year, and is thereafter anonymized and maintained without a time limit. Other usage information is maintained for a period of time that is usually less than two years, and is thereafter anonymized and maintained without a time limit. Information that you upload to your account, or information that is custom made for you, may be maintained for as long as you maintain your account with us, and for a reasonable period of time thereafter. Any other user information may be kept without specified time limit.</p>
                    
                    <p>Notwithstanding any of the foregoing, any user information may be kept for a period longer than set forth in the foregoing paragraph in the event of our legitimate interests, including a reasonable business or legal interest in the same.</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-tambor-navy mb-4">Who May Receive User Information?</h3>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>We may share information we collect globally, both internally and externally with our vendors and third-party service providers, who may be located in different jurisdictions. Data transfers may be necessary to operate and provide the services.</p>
                    
                    <p>Without limiting the generality of the foregoing, we may share certain user information, or have it processed, as necessary or reasonable to provide you the services with the following third-parties for the reasons set forth herein or for other legitimate and reasonable reasons: Audiense (to perform audience analyses); BuzzAbout (to perform social listening); Relevance (for automation and integration); our cloud hosting and processing services (including, without limitation, Google and its affiliated companies, Demographics Pro, and Stat Social); LLM and AI service providers; analytics and monitoring services (e.g., Google Analytics, Mixpanel, Sentry, and Rollbar); payment processors (e.g., Stripe); invoicing and accounting services providers; email service provider; and customer support platform provider. For an up-to-date list of all service providers being used that may be processing your specific user information, please contact us using the information further below.</p>
                    
                    <p>Your user information may be further disclosed in connection with legal requirements (e.g., court orders and regulatory compliance) or as part of a business transfer (e.g., an acquisition or reorganization).</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-tambor-navy mb-4">What Are Your Rights?</h3>
                  <div className="text-gray-600 leading-relaxed">
                    <p className="mb-4">Depending on your jurisdiction, you may have the following rights in terms of your user information that can be used to personally identify you:</p>
                    <ul className="space-y-2 list-disc list-inside ml-4 mb-4">
                      <li><strong>The right to access.</strong> You may have the right to receive a copy of your personal data.</li>
                      <li><strong>The right to rectification.</strong> You may have the right to rectify any inaccurate personal data and to have any incomplete personal data about you completed.</li>
                      <li><strong>The right to erasure.</strong> In some circumstances, you may have the right to the erasure of your personal data without undue delay.</li>
                      <li><strong>The right to object to or restrict processing.</strong> Under some circumstances, you may have the right to object to the processing of your personal data or request restricting the processing of your personal data.</li>
                      <li><strong>The right to data portability.</strong> You may have the right to request to receive a copy of your personal data in a format that can be transmitted to other organizations.</li>
                      <li><strong>The right to complain to a supervisory authority.</strong> You may have the right to complain to your relevant supervisory authority.</li>
                      <li><strong>The right in relation to automated decision-making and profiling.</strong> You may have the right to be free from decisions we may make that are based solely on automated processing of your user information, including profiling, if they produce a significant legal effect on you, unless such decision-making or profiling is necessary for entering into or performing a contract between you and us, or is made with your explicit consent.</li>
                      <li><strong>The right to withdraw consent.</strong> You may have the right to withdraw consents that you have given to us regarding the processing of your personal data.</li>
                      <li><strong>The right to an agent.</strong> In some jurisdictions, you may have the right to designate an authorized agent to make a request on your behalf.</li>
                    </ul>
                    
                    <p className="mb-4">We reserve the right to respond to your request in a manner consistent with applicable law, including any exceptions or inapplicability of law that may result in a request being denied in whole or in part.</p>
                    
                    <p className="mb-4">You may exercise any of your applicable rights without fear of unlawful discrimination.</p>
                    
                    <p>We keep records of all requests wherein you attempt to exercise your rights. We may require additional information from you to confirm your identity in responding to requests.</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-tambor-navy mb-4">Changes to This Statement</h3>
                  <div className="text-gray-600 leading-relaxed">
                    <p>We may update this Statement from time to time in our discretion, and we recommend that you review this statement from time to time to stay informed as to our current practices and policies.</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-tambor-navy mb-4">Questions or Comments</h3>
                  <div className="text-gray-600 leading-relaxed">
                    <p className="mb-4">If you have any questions or comments about this document and the information in it, we invite you to contact us as follows:</p>
                    
                    <div className="bg-white rounded-xl p-6 border border-gray-200">
                      <p className="font-semibold text-tambor-navy mb-2">Driver Seat AI Inc.</p>
                      <p>705 Gold Lake Drive, Suite 250</p>
                      <p>Folsom, California 95630</p>
                      <p className="mt-2">
                        <a href="mailto:legal@tambor.ai" className="text-tambor-red hover:text-tambor-red-dark transition-colors duration-300 font-medium">
                          legal@tambor.ai
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-tambor-navy via-tambor-blue-dark to-tambor-navy py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-tambor-red opacity-10 rounded-full blur-3xl top-20 right-20 animate-float animate-morph"></div>
          <div className="absolute w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-tambor-blue opacity-15 rounded-full blur-3xl bottom-20 left-20 animate-float animate-morph" style={{ animationDelay: '3s' }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-12 relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight px-4 sm:px-0">
            Questions About Our 
            <br />
            <span className="bg-gradient-to-r from-tambor-red to-tambor-red-light bg-clip-text text-transparent">
              Legal Policies
            </span>?
          </h2>
          <p className="text-lg sm:text-xl text-white/80 mb-12 leading-relaxed font-light px-4 sm:px-0">
            We're committed to transparency and protecting your privacy. 
            Contact us if you have any questions about our terms or policies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/"
              className="group bg-gradient-to-r from-tambor-red to-tambor-red-light hover:from-tambor-red-dark hover:to-tambor-red text-white px-8 sm:px-10 py-4 rounded-2xl text-base sm:text-lg font-bold transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-tambor-red/25 inline-flex items-center justify-center gap-3 mx-4 sm:mx-0"
            >
              Get Started Today
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 rotate-180 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <button className="border-2 border-white/30 hover:border-white/60 backdrop-blur-sm text-white hover:bg-white/10 px-8 sm:px-10 py-4 rounded-2xl text-base sm:text-lg font-bold transition-all duration-500 inline-flex items-center justify-center gap-3 mx-4 sm:mx-0">
              Contact Support
              <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LegalPage;