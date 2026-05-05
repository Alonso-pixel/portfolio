export default function PrivacyPolicy() {
  const appName = "Bulgario";
  const contactEmail = "alonsoalarconaguilar123@gmail.com";
  const effectiveDate = "May 4, 2026";

  return (
    <main className="mx-auto max-w-3xl px-6 py-12 leading-relaxed">
      <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">
        Effective date: {effectiveDate}
      </p>

      <p className="mb-6">
        This Privacy Policy describes how {appName} (&quot;the App&quot;,
        &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) handles information
        when you use our mobile application available on Google Play.
        {" "}{appName} is your fermentation partner &mdash; guided by our app
        mascot &mdash; offering recipes, step-by-step guides, fermentation
        timers, and educational content for kefir, kombucha, sauerkraut,
        kimchi, yogurt, and other traditional ferments.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        1. Information We Collect
      </h2>
      <p className="mb-3">
        We aim to collect as little personal information as possible. The App
        may handle the following types of data:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>
          <strong>Information you provide:</strong> recipes you save, notes,
          fermentation timers, and preferences you configure inside the App.
          This information is stored locally on your device unless explicitly
          synced.
        </li>
        <li>
          <strong>Automatically collected information:</strong> non-personal
          technical data such as device model, operating system version, app
          version, language, and crash reports, used solely to improve
          stability and performance.
        </li>
        <li>
          <strong>No account is required.</strong> The App does not ask you to
          register or provide your name, address, or phone number.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        2. How We Use Information
      </h2>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>To provide the core functionality of the App (recipes, timers, guides).</li>
        <li>To diagnose crashes and improve App performance.</li>
        <li>To respond to your support requests if you contact us.</li>
      </ul>
      <p className="mb-4">
        We do <strong>not</strong> sell, rent, or trade your personal
        information. We do not use your data for advertising profiling.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        3. Permissions Requested
      </h2>
      <p className="mb-3">
        Depending on the features you use, the App may request the following
        Android permissions:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>
          <strong>Notifications:</strong> to alert you when a fermentation
          timer is complete.
        </li>
        <li>
          <strong>Storage / Photos:</strong> only if you choose to attach a
          photo to a recipe or note. Images stay on your device.
        </li>
        <li>
          <strong>Internet access:</strong> to load updated recipe content and
          submit anonymous crash reports.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">4. Third-Party Services</h2>
      <p className="mb-3">
        The App may rely on the following third-party services, each governed
        by their own privacy policy:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>
          <strong>Google Play Services</strong> &mdash; for app distribution
          and integrity checks.
        </li>
        <li>
          <strong>Firebase Crashlytics / Analytics</strong> (if enabled) &mdash;
          for anonymous crash and usage statistics.
        </li>
      </ul>
      <p className="mb-4">
        These providers may collect device identifiers in accordance with their
        own policies. We do not link this data to your identity.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">5. Data Storage and Security</h2>
      <p className="mb-4">
        Your in-app content (saved recipes, notes, timers) is stored locally on
        your device. We use reasonable technical measures to protect any data
        transmitted to our services, but no method of transmission over the
        internet is 100% secure.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">6. Children&apos;s Privacy</h2>
      <p className="mb-4">
        The App is not directed to children under 13. We do not knowingly
        collect personal information from children. If you believe a child has
        provided us with personal data, please contact us so we can delete it.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">7. Your Rights</h2>
      <p className="mb-4">
        You can delete all locally stored data by uninstalling the App or
        clearing its data from your device&apos;s settings. If you have
        questions or wish to exercise data rights under GDPR, CCPA, or similar
        regulations, contact us at the address below.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">8. Health Disclaimer</h2>
      <p className="mb-4">
        Content about fermented foods is provided for educational purposes only
        and is not medical advice. Consult a qualified professional before
        consuming home-fermented products, especially if you are pregnant,
        immunocompromised, or have a medical condition.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">9. Changes to This Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. Changes will be
        posted on this page with an updated effective date. Continued use of
        the App after changes means you accept the revised policy.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">10. Contact</h2>
      <p className="mb-12">
        For any questions about this Privacy Policy, contact us at{" "}
        <a
          href={`mailto:${contactEmail}`}
          className="text-blue-600 underline dark:text-blue-400"
        >
          {contactEmail}
        </a>
        .
      </p>
    </main>
  );
}
