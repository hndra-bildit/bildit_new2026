import type { Metadata } from 'next'

export const metadata: Metadata = {
  description:
    'BILDIT privacy notice: what information we collect, how we use it, and your rights. Last updated April 28, 2026.'
}

const linkClass = 'text-[#5b21b6] underline decoration-[#5b21b6]/30 underline-offset-2 hover:text-[#4c1d95]'

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-[60vh] bg-white text-neutral-900">
      <div className="mx-auto max-w-[720px] px-4 py-12 sm:px-6 md:py-16">
        <h1 className="font-[family-name:var(--font-uncut-sans)] text-2xl font-bold tracking-tight text-neutral-950 md:text-[1.75rem]">
          Privacy Policy
        </h1>

        <div className="font-[family-name:var(--font-uncut-sans)] mt-6 space-y-6 text-[15px] leading-[1.75] text-neutral-800 md:text-base md:leading-[1.7]">
          <p>
            <strong>Last updated November 01, 2021</strong>
          </p>

          <p>
            Thank you for choosing to be part of our community at BILDIT, Inc. (&ldquo;Company,&rdquo; &ldquo;we,&rdquo;
            &ldquo;us,&rdquo; or &ldquo;our&rdquo;). We are committed to protecting your personal information and your
            right to privacy. If you have any questions or concerns about this privacy notice or our practices with
            regard to your personal information, please contact us at{' '}
            <a href="mailto:support@bildit.co" className={linkClass}>
              support@bildit.co
            </a>
            .
          </p>

          <p>This privacy notice describes how we might use your information if you:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Visit our website at{' '}
              <a href="https://www.bildit.co" className={linkClass}>
                https://www.bildit.co
              </a>
            </li>
            <li>Engage with us in other related ways — including any sales, marketing, or events</li>
          </ul>

          <p>In this privacy notice, if we refer to:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              &ldquo;Website,&rdquo; we are referring to any website of ours that references or links to this policy
            </li>
            <li>
              &ldquo;Services,&rdquo; we are referring to our Website, and other related services, including any sales,
              marketing, or events
            </li>
          </ul>

          <p>
            The purpose of this privacy notice is to explain to you in the clearest way possible what information we
            collect, how we use it, and what rights you have in relation to it. If there are any terms in this privacy
            notice that you do not agree with, please discontinue use of our Services immediately.
          </p>

          <p>
            <strong>
              Please read this privacy notice carefully, as it will help you understand what we do with the information
              that we collect.
            </strong>
          </p>

          <h2 className="pt-2 text-lg font-bold text-neutral-950">TABLE OF CONTENTS</h2>
          <ol className="list-decimal space-y-1 pl-5">
            <li>
              <a href="#section-1" className={linkClass}>
                WHAT INFORMATION DO WE COLLECT?
              </a>
            </li>
            <li>
              <a href="#section-2" className={linkClass}>
                HOW DO WE USE YOUR INFORMATION?
              </a>
            </li>
            <li>
              <a href="#section-3" className={linkClass}>
                WILL YOUR INFORMATION BE SHARED WITH ANYONE?
              </a>
            </li>
            <li>
              <a href="#section-4" className={linkClass}>
                DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
              </a>
            </li>
            <li>
              <a href="#section-5" className={linkClass}>
                HOW LONG DO WE KEEP YOUR INFORMATION?
              </a>
            </li>
            <li>
              <a href="#section-6" className={linkClass}>
                HOW DO WE KEEP YOUR INFORMATION SAFE?
              </a>
            </li>
            <li>
              <a href="#section-7" className={linkClass}>
                DO WE COLLECT INFORMATION FROM MINORS?
              </a>
            </li>
            <li>
              <a href="#section-8" className={linkClass}>
                WHAT ARE YOUR PRIVACY RIGHTS?
              </a>
            </li>
            <li>
              <a href="#section-9" className={linkClass}>
                CONTROLS FOR DO-NOT-TRACK FEATURES
              </a>
            </li>
            <li>
              <a href="#section-10" className={linkClass}>
                DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
              </a>
            </li>
            <li>
              <a href="#section-11" className={linkClass}>
                DO WE MAKE UPDATES TO THIS NOTICE?
              </a>
            </li>
            <li>
              <a href="#section-12" className={linkClass}>
                HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
              </a>
            </li>
            <li>
              <a href="#section-13" className={linkClass}>
                HOW CAN YOU REVIEW, UPDATE OR DELETE THE DATA WE COLLECT FROM YOU?
              </a>
            </li>
          </ol>

          <h2 id="section-1" className="scroll-mt-24 pt-4 text-lg font-bold text-neutral-950">
            1. WHAT INFORMATION DO WE COLLECT?
          </h2>
          <h3 className="text-base font-bold text-neutral-900">Personal information you disclose to us</h3>
          <p>
            <strong>In Short:</strong> We collect personal information that you provide to us.
          </p>
          <p>
            We collect personal information that you voluntarily provide to us when you express an interest in obtaining
            information about us or our products and Services, when you participate in activities on the Website or
            otherwise when you contact us.
          </p>
          <p>
            The personal information that we collect depends on the context of your interactions with us and the
            Website, the choices you make and the products and features you use. The personal information we collect may
            include the following:
          </p>
          <p>
            Personal Information Provided by You. We collect names; email addresses; phone numbers; job titles;
            usernames; passwords; mailing addresses; and other similar information.
          </p>
          <p>
            All personal information that you provide to us must be true, complete and accurate, and you must notify us
            of any changes to such personal information.
          </p>
          <h3 className="text-base font-bold text-neutral-900">Information automatically collected</h3>
          <p>
            <strong>In Short:</strong> Some information — such as your Internet Protocol (IP) address and/or browser and
            device characteristics — is collected automatically when you visit our Website.
          </p>
          <p>
            We automatically collect certain information when you visit, use or navigate the Website. This information
            does not reveal your specific identity (like your name or contact information) but may include device and
            usage information, such as your IP address, browser and device characteristics, operating system, language
            preferences, referring URLs, device name, country, location, information about how and when you use our
            Website and other technical information. This information is primarily needed to maintain the security and
            operation of our Website, and for our internal analytics and reporting purposes.
          </p>
          <p>Like many businesses, we also collect information through cookies and similar technologies.</p>
          <p>The information we collect includes:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Log and Usage Data. Log and usage data is service-related, diagnostic, usage and performance information
              our servers automatically collect when you access or use our Website and which we record in log files.
              Depending on how you interact with us, this log data may include your IP address, device information,
              browser type and settings and information about your activity in the Website (such as the date/time stamps
              associated with your usage, pages and files viewed, searches and other actions you take such as which
              features you use), device event information (such as system activity, error reports (sometimes called
              &lsquo;crash dumps&rsquo;) and hardware settings).
            </li>
          </ul>

          <h2 id="section-2" className="scroll-mt-24 pt-4 text-lg font-bold text-neutral-950">
            2. HOW DO WE USE YOUR INFORMATION?
          </h2>
          <p>
            <strong>In Short:</strong> We process your information for purposes based on legitimate business interests,
            the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent.
          </p>
          <p>
            We use personal information collected via our Website for a variety of business purposes described below. We
            process your personal information for these purposes in reliance on our legitimate business interests, in
            order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal
            obligations. We indicate the specific processing grounds we rely on next to each purpose listed below.
          </p>
          <p>We use the information we collect or receive:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              To facilitate account creation and logon process. If you choose to link your account with us to a
              third-party account (such as your Google or Facebook account), we use the information you allowed us to
              collect from those third parties to facilitate account creation and logon process for the performance of
              the contract.
            </li>
            <li>
              To post testimonials. We post testimonials on our Website that may contain personal information. Prior to
              posting a testimonial, we will obtain your consent to use your name and the content of the testimonial. If
              you wish to update, or delete your testimonial, please contact us at hello@bildit.co and be sure to
              include your name, testimonial location, and contact information.
            </li>
            <li>
              Request feedback. We may use your information to request feedback and to contact you about your use of our
              Website.
            </li>
            <li>
              To enable user-to-user communications. We may use your information in order to enable user-to-user
              communications with each user&apos;s consent.
            </li>
            <li>
              To manage user accounts. We may use your information for the purposes of managing our account and keeping
              it in working order.
            </li>
            <li>
              To send administrative information to you. We may use your personal information to send you product,
              service and new feature information and/or information about changes to our terms, conditions, and
              policies.
            </li>
            <li>
              To protect our Services. We may use your information as part of our efforts to keep our Website safe and
              secure (for example, for fraud monitoring and prevention).
            </li>
            <li>
              To enforce our terms, conditions and policies for business purposes, to comply with legal and regulatory
              requirements or in connection with our contract.
            </li>
            <li>
              To respond to legal requests and prevent harm. If we receive a subpoena or other legal request, we may
              need to inspect the data we hold to determine how to respond.
            </li>
            <li>
              To send you marketing and promotional communications. We and/or our third-party marketing partners may use
              the personal information you send to us for our marketing purposes, if this is in accordance with your
              marketing preferences. For example, when expressing an interest in obtaining information about us or our
              Website, subscribing to marketing or otherwise contacting us, we will collect personal information from
              you. You can opt-out of our marketing emails at any time (see the &ldquo;WHAT ARE YOUR PRIVACY
              RIGHTS?&rdquo; below).
            </li>
            <li>
              Deliver targeted advertising to you. We may use your information to develop and display personalized
              content and advertising (and work with third parties who do so) tailored to your interests and/or location
              and to measure its effectiveness.
            </li>
          </ul>

          <h2 id="section-3" className="scroll-mt-24 pt-4 text-lg font-bold text-neutral-950">
            3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?
          </h2>
          <p>
            <strong>In Short:</strong> We only share information with your consent, to comply with laws, to provide you
            with services, to protect your rights, or to fulfill business obligations.
          </p>
          <p>We may process or share your data that we hold based on the following legal basis:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Consent: We may process your data if you have given us specific consent to use your personal information
              for a specific purpose.
            </li>
            <li>
              Legitimate Interests: We may process your data when it is reasonably necessary to achieve our legitimate
              business interests.
            </li>
            <li>
              Performance of a Contract: Where we have entered into a contract with you, we may process your personal
              information to fulfill the terms of our contract.
            </li>
            <li>
              Legal Obligations: We may disclose your information where we are legally required to do so in order to
              comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process,
              such as in response to a court order or a subpoena (including in response to public authorities to meet
              national security or law enforcement requirements).
            </li>
            <li>
              Vital Interests: We may disclose your information where we believe it is necessary to investigate,
              prevent, or take action regarding potential violations of our policies, suspected fraud, situations
              involving potential threats to the safety of any person and illegal activities, or as evidence in
              litigation in which we are involved.
            </li>
          </ul>
          <p>
            More specifically, we may need to process your data or share your personal information in the following
            situations:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Business Transfers. We may share or transfer your information in connection with, or during negotiations
              of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to
              another company.
            </li>
          </ul>

          <h2 id="section-4" className="scroll-mt-24 pt-4 text-lg font-bold text-neutral-950">
            4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
          </h2>
          <p>
            <strong>In Short:</strong> We may use cookies and other tracking technologies to collect and store your
            information.
          </p>
          <p>
            We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store
            information. Specific information about how we use such technologies and how you can refuse certain cookies
            is set out in our Cookie Notice.
          </p>

          <h2 id="section-5" className="scroll-mt-24 pt-4 text-lg font-bold text-neutral-950">
            5. HOW LONG DO WE KEEP YOUR INFORMATION?
          </h2>
          <p>
            <strong>In Short:</strong> We keep your information for as long as necessary to fulfill the purposes
            outlined in this privacy notice unless otherwise required by law.
          </p>
          <p>
            We will only keep your personal information for as long as it is necessary for the purposes set out in this
            privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting or
            other legal requirements). No purpose in this notice will require us keeping your personal information for
            longer than 2 years.
          </p>
          <p>
            When we have no ongoing legitimate business need to process your personal information, we will either delete
            or anonymize such information, or, if this is not possible (for example, because your personal information
            has been stored in backup archives), then we will securely store your personal information and isolate it
            from any further processing until deletion is possible.
          </p>

          <h2 id="section-6" className="scroll-mt-24 pt-4 text-lg font-bold text-neutral-950">
            6. HOW DO WE KEEP YOUR INFORMATION SAFE?
          </h2>
          <p>
            <strong>In Short:</strong> We aim to protect your personal information through a system of organizational
            and technical security measures.
          </p>
          <p>
            We have implemented appropriate technical and organizational security measures designed to protect the
            security of any personal information we process. However, despite our safeguards and efforts to secure your
            information, no electronic transmission over the Internet or information storage technology can be
            guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other
            unauthorized third parties will not be able to defeat our security, and improperly collect, access, steal,
            or modify your information. Although we will do our best to protect your personal information, transmission
            of personal information to and from our Website is at your own risk. You should only access the Website
            within a secure environment.
          </p>

          <h2 id="section-7" className="scroll-mt-24 pt-4 text-lg font-bold text-neutral-950">
            7. DO WE COLLECT INFORMATION FROM MINORS?
          </h2>
          <p>
            <strong>In Short:</strong> We do not knowingly collect data from or market to children under 18 years of
            age.
          </p>
          <p>
            We do not knowingly solicit data from or market to children under 18 years of age. By using the Website, you
            represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to
            such minor dependent&apos;s use of the Website. If we learn that personal information from users less than
            18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly
            delete such data from our records. If you become aware of any data we may have collected from children under
            age 18, please contact us at{' '}
            <a href="mailto:hello@bildit.co" className={linkClass}>
              hello@bildit.co
            </a>
            .
          </p>

          <h2 id="section-8" className="scroll-mt-24 pt-4 text-lg font-bold text-neutral-950">
            8. WHAT ARE YOUR PRIVACY RIGHTS?
          </h2>
          <p>
            <strong>In Short:</strong> You may review, change, or terminate your account at any time.
          </p>
          <p>
            If you are a resident in the EEA or UK and you believe we are unlawfully processing your personal
            information, you also have the right to complain to your local data protection supervisory authority. You
            can find their contact details here:{' '}
            <a
              href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm"
              className={linkClass}
            >
              https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm
            </a>
            .
          </p>
          <p>
            If you are a resident in Switzerland, the contact details for the data protection authorities are available
            here:{' '}
            <a href="https://www.edoeb.admin.ch/edoeb/en/home.html" className={linkClass}>
              https://www.edoeb.admin.ch/edoeb/en/home.html
            </a>
            .
          </p>
          <p>
            Cookies and similar technologies: Most Web browsers are set to accept cookies by default. If you prefer, you
            can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove
            cookies or reject cookies, this could affect certain features or services of our Website. To opt-out of
            interest-based advertising by advertisers on our Website visit{' '}
            <a href="http://www.aboutads.info/choices/" className={linkClass}>
              http://www.aboutads.info/choices/
            </a>
            .
          </p>

          <h2 id="section-9" className="scroll-mt-24 pt-4 text-lg font-bold text-neutral-950">
            9. CONTROLS FOR DO-NOT-TRACK FEATURES
          </h2>
          <p>
            Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track
            (&ldquo;DNT&rdquo;) feature or setting you can activate to signal your privacy preference not to have data
            about your online browsing activities monitored and collected. At this stage no uniform technology standard
            for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT
            browser signals or any other mechanism that automatically communicates your choice not to be tracked online.
            If a standard for online tracking is adopted that we must follow in the future, we will inform you about
            that practice in a revised version of this privacy notice.
          </p>

          <h2 id="section-10" className="scroll-mt-24 pt-4 text-lg font-bold text-neutral-950">
            10. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
          </h2>
          <p>
            <strong>In Short:</strong> Yes, if you are a resident of California, you are granted specific rights
            regarding access to your personal information.
          </p>
          <p>
            California Civil Code Section 1798.83, also known as the &ldquo;Shine The Light&rdquo; law, permits our
            users who are California residents to request and obtain from us, once a year and free of charge,
            information about categories of personal information (if any) we disclosed to third parties for direct
            marketing purposes and the names and addresses of all third parties with which we shared personal
            information in the immediately preceding calendar year. If you are a California resident and would like to
            make such a request, please submit your request in writing to us using the contact information provided
            below.
          </p>
          <p>
            If you are under 18 years of age, reside in California, and have a registered account with the Website, you
            have the right to request removal of unwanted data that you publicly post on the Website. To request removal
            of such data, please contact us using the contact information provided below, and include the email address
            associated with your account and a statement that you reside in California. We will make sure the data is
            not publicly displayed on the Website, but please be aware that the data may not be completely or
            comprehensively removed from all our systems (e.g. backups, etc.).
          </p>

          <h3 className="pt-2 text-base font-bold text-neutral-900">CCPA Privacy Notice</h3>
          <p>The California Code of Regulations defines a &ldquo;resident&rdquo; as:</p>
          <p>
            (2) every individual who is domiciled in the State of California who is outside the State of California for
            a temporary or transitory purpose
          </p>
          <p>All other individuals are defined as &ldquo;non-residents.&rdquo;</p>
          <p>
            If this definition of &ldquo;resident&rdquo; applies to you, we must adhere to certain rights and
            obligations regarding your personal information.
          </p>
          <p>What categories of personal information do we collect?</p>
          <p>We have collected the following categories of personal information in the past twelve (12) months:</p>
          <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
            <table className="w-full min-w-[520px] border-collapse border border-neutral-300 text-left text-sm">
              <thead>
                <tr className="bg-neutral-50">
                  <th className="border border-neutral-300 px-2 py-2 font-semibold">Category</th>
                  <th className="border border-neutral-300 px-2 py-2 font-semibold">Examples</th>
                  <th className="border border-neutral-300 px-2 py-2 font-semibold">Collected</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-neutral-300 px-2 py-2 align-top">A. Identifiers</td>
                  <td className="border border-neutral-300 px-2 py-2 align-top">
                    Contact details, such as real name, alias, postal address, telephone or mobile contact number,
                    unique personal identifier, online identifier, Internet Protocol address, email address and account
                    name
                  </td>
                  <td className="border border-neutral-300 px-2 py-2 align-top">NO</td>
                </tr>
                <tr>
                  <td className="border border-neutral-300 px-2 py-2 align-top">
                    B. Personal information categories listed in the California Customer Records statute
                  </td>
                  <td className="border border-neutral-300 px-2 py-2 align-top">
                    Name, contact information, education, employment, employment history and financial information
                  </td>
                  <td className="border border-neutral-300 px-2 py-2 align-top">YES</td>
                </tr>
                <tr>
                  <td className="border border-neutral-300 px-2 py-2 align-top">
                    C. Protected classification characteristics under California or federal law
                  </td>
                  <td className="border border-neutral-300 px-2 py-2 align-top">Gender and date of birth</td>
                  <td className="border border-neutral-300 px-2 py-2 align-top">NO</td>
                </tr>
                <tr>
                  <td className="border border-neutral-300 px-2 py-2 align-top">D. Commercial information</td>
                  <td className="border border-neutral-300 px-2 py-2 align-top">
                    Transaction information, purchase history, financial details and payment information
                  </td>
                  <td className="border border-neutral-300 px-2 py-2 align-top">NO</td>
                </tr>
                <tr>
                  <td className="border border-neutral-300 px-2 py-2 align-top">E. Biometric information</td>
                  <td className="border border-neutral-300 px-2 py-2 align-top">Fingerprints and voiceprints</td>
                  <td className="border border-neutral-300 px-2 py-2 align-top">NO</td>
                </tr>
                <tr>
                  <td className="border border-neutral-300 px-2 py-2 align-top">
                    F. Internet or other similar network activity
                  </td>
                  <td className="border border-neutral-300 px-2 py-2 align-top">
                    Browsing history, search history, online behavior, interest data, and interactions with our and
                    other websites, applications, systems and advertisements
                  </td>
                  <td className="border border-neutral-300 px-2 py-2 align-top">NO</td>
                </tr>
                <tr>
                  <td className="border border-neutral-300 px-2 py-2 align-top">G. Geolocation data</td>
                  <td className="border border-neutral-300 px-2 py-2 align-top">Device location</td>
                  <td className="border border-neutral-300 px-2 py-2 align-top">NO</td>
                </tr>
                <tr>
                  <td className="border border-neutral-300 px-2 py-2 align-top">
                    H. Audio, electronic, visual, thermal, olfactory, or similar information
                  </td>
                  <td className="border border-neutral-300 px-2 py-2 align-top">
                    Images and audio, video or call recordings created in connection with our business activities
                  </td>
                  <td className="border border-neutral-300 px-2 py-2 align-top">NO</td>
                </tr>
                <tr>
                  <td className="border border-neutral-300 px-2 py-2 align-top">
                    I. Professional or employment-related information
                  </td>
                  <td className="border border-neutral-300 px-2 py-2 align-top">
                    Business contact details in order to provide you our services at a business level, job title as well
                    as work history and professional qualifications if you apply for a job with us
                  </td>
                  <td className="border border-neutral-300 px-2 py-2 align-top">NO</td>
                </tr>
                <tr>
                  <td className="border border-neutral-300 px-2 py-2 align-top">J. Education Information</td>
                  <td className="border border-neutral-300 px-2 py-2 align-top">
                    Student records and directory information
                  </td>
                  <td className="border border-neutral-300 px-2 py-2 align-top">NO</td>
                </tr>
                <tr>
                  <td className="border border-neutral-300 px-2 py-2 align-top">
                    K. Inferences drawn from other personal information
                  </td>
                  <td className="border border-neutral-300 px-2 py-2 align-top">
                    Inferences drawn from any of the collected personal information listed above to create a profile or
                    summary about, for example, an individual&apos;s preferences and characteristics
                  </td>
                  <td className="border border-neutral-300 px-2 py-2 align-top">NO</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            We may also collect other personal information outside of these categories instances where you interact with
            us in-person, online, or by phone or mail in the context of:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Receiving help through our customer support channels;</li>
            <li>Participation in customer surveys or contests; and</li>
            <li>Facilitation in the delivery of our Services and to respond to your inquiries.</li>
          </ul>

          <h3 className="pt-2 text-base font-bold text-neutral-900">
            How do we use and share your personal information?
          </h3>
          <p>More information about our data collection and sharing practices can be found in this privacy notice.</p>
          <p>
            You may contact us by email at Hello@bildit.co, or by referring to the contact details at the bottom of this
            document.
          </p>
          <p>
            If you are using an authorized agent to exercise your right to opt-out we may deny a request if the
            authorized agent does not submit proof that they have been validly authorized to act on your behalf.
          </p>

          <h3 className="pt-2 text-base font-bold text-neutral-900">
            Will your information be shared with anyone else?
          </h3>
          <p>
            We may disclose your personal information with our service providers pursuant to a written contract between
            us and each service provider. Each service provider is a for-profit entity that processes the information on
            our behalf.
          </p>
          <p>
            We may use your personal information for our own business purposes, such as for undertaking internal
            research for technological development and demonstration. This is not considered to be &ldquo;selling&rdquo;
            of your personal data.
          </p>
          <p>
            BILDIT, INC. has not disclosed or sold any personal information to third parties for a business or
            commercial purpose in the preceding 12 months. BILDIT, INC. will not sell personal information in the future
            belonging to website visitors, users and other consumers.
          </p>

          <h3 className="pt-2 text-base font-bold text-neutral-900">Your rights with respect to your personal data</h3>
          <p>
            <strong>Right to request deletion of the data – Request to delete</strong>
          </p>
          <p>
            You can ask for the deletion of your personal information. If you ask us to delete your personal
            information, we will respect your request and delete your personal information, subject to certain
            exceptions provided by law, such as (but not limited to) the exercise by another consumer of his or her
            right to free speech, our compliance requirements resulting from a legal obligation or any processing that
            may be required to protect against illegal activities.
          </p>
          <p>
            <strong>Right to be informed – Request to know</strong>
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Depending on the circumstances, you have a right to know:</li>
            <li>whether we collect and use your personal information;</li>
            <li>the categories of personal information that we collect;</li>
            <li>the purposes for which the collected personal information is used;</li>
            <li>whether we sell your personal information to third parties;</li>
            <li>the categories of personal information that we sold or disclosed for a business purpose;</li>
            <li>
              the categories of third parties to whom the personal information was sold or disclosed for a business
              purpose; and
            </li>
            <li>the business or commercial purpose for collecting or selling personal information.</li>
          </ul>
          <p>
            In accordance with applicable law, we are not obligated to provide or delete consumer information that is
            de-identified in response to a consumer request or to re-identify individual data to verify a consumer
            request.
          </p>
          <p>
            <strong>Right to Non-Discrimination for the Exercise of a Consumer&apos;s Privacy Rights</strong>
          </p>
          <p>We will not discriminate against you if you exercise your privacy rights.</p>

          <h3 className="pt-2 text-base font-bold text-neutral-900">Verification process</h3>
          <p>
            Upon receiving your request, we will need to verify your identity to determine you are the same person about
            whom we have the information in our system. These verification efforts require us to ask you to provide
            information so that we can match it with information you have previously provided us. For instance,
            depending on the type of request you submit, we may ask you to provide certain information so that we can
            match the information you provide with the information we already have on file, or we may contact you
            through a communication method (e.g. phone or email) that you have previously provided to us. We may also
            use other verification methods as the circumstances dictate.
          </p>
          <p>
            We will only use personal information provided in your request to verify your identity or authority to make
            the request. To the extent possible, we will avoid requesting additional information from you for the
            purposes of verification. If, however, we cannot verify your identity from the information already
            maintained by us, we may request that you provide additional information for the purposes of verifying your
            identity, and for security or fraud-prevention purposes. We will delete such additionally provided
            information as soon as we finish verifying you.
          </p>

          <h3 className="pt-2 text-base font-bold text-neutral-900">Other privacy rights</h3>
          <ul className="list-disc space-y-2 pl-5">
            <li>You may object to the processing of your personal data.</li>
            <li>
              You may request correction of your personal data if it is incorrect or no longer relevant, or ask to
              restrict the processing of the data.
            </li>
            <li>
              You can designate an authorized agent to make a request under the CCPA on your behalf. We may deny a
              request from an authorized agent that does not submit proof that they have been validly authorized to act
              on your behalf in accordance with the CCPA.
            </li>
            <li>
              You may request to opt-out from future selling of your personal information to third parties. Upon
              receiving a request to opt-out, we will act upon the request as soon as feasibly possible, but no later
              than 15 days from the date of the request submission.
            </li>
          </ul>
          <p>
            To exercise these rights, you can contact us by email at Hello@bildit.co, or by referring to the contact
            details at the bottom of this document. If you have a complaint about how we handle your data, we would like
            to hear from you.
          </p>

          <h2 id="section-11" className="scroll-mt-24 pt-4 text-lg font-bold text-neutral-950">
            11. DO WE MAKE UPDATES TO THIS NOTICE?
          </h2>
          <p>
            <strong>In Short:</strong> Yes, we will update this notice as necessary to stay compliant with relevant
            laws.
          </p>
          <p>
            We may update this privacy notice from time to time. The updated version will be indicated by an updated
            &ldquo;Revised&rdquo; date and the updated version will be effective as soon as it is accessible. If we make
            material changes to this privacy notice, we may notify you either by prominently posting a notice of such
            changes or by directly sending you a notification. We encourage you to review this privacy notice frequently
            to be informed of how we are protecting your information.
          </p>

          <h2 id="section-12" className="scroll-mt-24 pt-4 text-lg font-bold text-neutral-950">
            12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
          </h2>
          <p>
            If you have questions or comments about this notice, you may email us at{' '}
            <a href="mailto:hello@bildit.co" className={linkClass}>
              hello@bildit.co
            </a>{' '}
            or by post to:
          </p>
          <p>
            BILDIT, INC.
            <br />
            534 River Crossing Dr. Fort Mill, SC 29715
            <br />
            United States
          </p>

          <h2 id="section-13" className="scroll-mt-24 pt-4 text-lg font-bold text-neutral-950">
            13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
          </h2>
          <p>
            Based on the applicable laws of your country, you may have the right to request access to the personal
            information we collect from you, change that information, or delete it in some circumstances. To request to
            review, update, or delete your personal information, please submit a request form by{' '}
            <a
              href="mailto:hello@bildit.co?subject=Data%20access%2C%20update%2C%20or%20deletion%20request"
              className={linkClass}
            >
              clicking here
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  )
}
