import { Link } from 'react-router-dom'
import LegalPage, { type LegalSection } from '../components/LegalPage'
import { CONTACT_EMAIL, LEGAL_LAST_UPDATED } from '../siteConfig'

const sections: LegalSection[] = [
  {
    id: 'introduction',
    heading: 'Introduction',
    body: (
      <>
        <p>
          This Privacy Policy explains how the Spandan browser extension
          (“Spandan” or the “extension”) accesses and uses information. Spandan
          is developed and maintained by an independent developer (“we”, “us”).
        </p>
        <p>
          The short version: to do its job, Spandan needs to know which browser
          tabs are playing audio and to control the YouTube tab you choose for
          music. That information is processed within your browser. Spandan
          does not operate a backend service that receives your browsing or
          playback information, does not require an account, and does not use
          advertising, analytics, or payment services.
        </p>
      </>
    ),
  },
  {
    id: 'what-spandan-does',
    heading: 'What Spandan Does',
    body: (
      <>
        <p>
          Spandan is a browser extension for Chromium-based browsers that
          manages background music. You choose a YouTube tab as your music tab.
          When another tab starts playing audio, Spandan pauses the music. When
          the browser is quiet again, Spandan waits for your chosen resume
          delay and resumes the music from the same position, optionally
          fading it in and out.
        </p>
        <p>
          You can limit which websites are allowed to pause your music with a
          website whitelist, and you can turn Spandan on or off at any time. If
          you pause or mute the music yourself, Spandan respects that choice.
        </p>
      </>
    ),
  },
  {
    id: 'information-accessed',
    heading: 'Information Spandan Accesses',
    body: (
      <>
        <p>
          To provide the functionality described above, Spandan may access:
        </p>
        <ul>
          <li>
            <strong>Tab URLs and titles</strong> — to identify your music tab,
            show it in the popup, and check audible tabs against your website
            whitelist.
          </li>
          <li>
            <strong>Tab identifiers and state</strong> — to keep track of which
            tab is your selected music tab.
          </li>
          <li>
            <strong>Whether tabs are audible</strong> — to notice when another
            tab starts or stops playing audio.
          </li>
          <li>
            <strong>Playback state of your music tab</strong> — for example
            whether the selected YouTube video is playing, paused, or muted,
            its volume while fading, and its playback position, so music can be
            paused and resumed correctly.
          </li>
          <li>
            <strong>Your settings</strong> — whether Spandan is enabled, the
            resume delay, the fade duration, and your website whitelist.
          </li>
        </ul>
        <p>
          Spandan accesses this information as needed while it runs. It does
          not build a record of your browsing history.
        </p>
      </>
    ),
  },
  {
    id: 'how-used',
    heading: 'How That Information Is Used',
    body: (
      <>
        <p>
          Information accessed by Spandan is used only to perform its core
          functionality: detecting audible tabs, identifying your selected
          music tab, and pausing, resuming, and fading its playback according
          to your settings.
        </p>
        <p>
          Spandan does not use this information for advertising, profiling,
          analytics, or any purpose unrelated to managing your background
          music.
        </p>
      </>
    ),
  },
  {
    id: 'local-storage',
    heading: 'Local Storage',
    body: (
      <>
        <p>
          Spandan uses your browser’s extension storage on your device to save:
        </p>
        <ul>
          <li>Whether Spandan is enabled or disabled</li>
          <li>Your resume delay and fade duration</li>
          <li>Your website whitelist</li>
          <li>Your selected music tab</li>
          <li>
            Playback and resume state the extension needs to pause and resume
            your music correctly
          </li>
        </ul>
        <p>
          This information stays in your browser. It is not sent to a server
          operated by Spandan. See{' '}
          <a href="#retention-deletion">Data Retention and Deletion</a> for how
          to remove it.
        </p>
      </>
    ),
  },
  {
    id: 'tab-audio-information',
    heading: 'Browser Tab and Audio Information',
    body: (
      <>
        <p>
          Your browser reports whether each tab is currently producing sound.
          Spandan uses that signal, together with the tab’s address, to decide
          whether another tab is playing audio and whether that website is
          allowed to pause your music.
        </p>
        <p>
          Information needed to provide the extension’s functionality is
          processed within the browser. Spandan does not record the audio
          itself, and does not transmit tab or audio information to Spandan or
          anyone else.
        </p>
      </>
    ),
  },
  {
    id: 'website-access',
    heading: 'Website Access',
    body: (
      <>
        <p>
          Spandan requests access to web pages so it can detect and manage
          audio-related behavior across tabs and control the selected YouTube
          music tab. When you install the extension, your browser shows this
          as permission to read and change data on websites you visit.
        </p>
        <p>
          This access is broad because any tab might start playing audio and
          your music tab can be any YouTube tab. Spandan uses it only to
          perform the functionality described in this policy. It does not use
          this access for:
        </p>
        <ul>
          <li>Advertising</li>
          <li>User profiling</li>
          <li>Analytics</li>
          <li>Selling data</li>
        </ul>
      </>
    ),
  },
  {
    id: 'data-sharing',
    heading: 'Data Sharing',
    body: (
      <>
        <ul>
          <li>Spandan does not sell user information.</li>
          <li>
            Spandan does not share tab or audio information with advertisers
            or other third parties.
          </li>
          <li>
            Spandan does not use user information for unrelated profiling.
          </li>
          <li>
            Spandan does not operate a cloud backend that receives this
            information.
          </li>
        </ul>
        <p>
          Because the information Spandan accesses stays in your browser, we
          generally have none to disclose. If we ever receive information from
          you directly — for example in an email — we may disclose it where
          required by law.
        </p>
      </>
    ),
  },
  {
    id: 'third-party-services',
    heading: 'Third-Party Services',
    body: (
      <>
        <p>
          Spandan does not use third-party advertising, analytics, or payment
          services, and it does not download executable code from remote
          servers.
        </p>
        <p>
          Spandan controls playback on YouTube pages that you open. Your use of
          YouTube itself is governed by YouTube’s own terms and privacy policy;
          Spandan does not send your information to YouTube. Your browser’s own
          data practices are governed by its maker’s privacy policy.
        </p>
      </>
    ),
  },
  {
    id: 'data-security',
    heading: 'Data Security',
    body: (
      <p>
        Because Spandan processes information within your browser and does not
        transmit it to a Spandan server, there is no Spandan-hosted copy of it
        to be exposed. Settings saved by Spandan are kept in your browser’s
        standard extension storage, so their protection depends on the security
        of your browser and device. Keeping both up to date is the best way to
        protect them.
      </p>
    ),
  },
  {
    id: 'retention-deletion',
    heading: 'Data Retention and Deletion',
    body: (
      <>
        <p>
          Spandan’s settings and extension state remain in your browser’s
          storage while the extension is installed. You can remove them at any
          time by clearing the extension’s stored data or by uninstalling
          Spandan from your browser’s extensions page, which removes its stored
          data. You can also reset your settings to their defaults from
          Spandan’s settings page.
        </p>
        <p>
          Spandan has no cloud accounts, so there is no Spandan-hosted user
          profile to delete.
        </p>
      </>
    ),
  },
  {
    id: 'children',
    heading: 'Children’s Privacy',
    body: (
      <p>
        Spandan is a general-purpose browser utility and is not directed
        specifically to children. It does not knowingly collect personal
        information from anyone, including children.
      </p>
    ),
  },
  {
    id: 'this-website',
    heading: 'This Website',
    body: (
      <p>
        This policy covers the Spandan extension. This website does not use
        analytics, advertising, or cookies. Like any website, it is served by a
        hosting provider that processes standard request information, such as
        IP addresses, to deliver pages, and it loads the Inter typeface from
        Google Fonts.
      </p>
    ),
  },
  {
    id: 'changes',
    heading: 'Changes to This Policy',
    body: (
      <p>
        If Spandan’s handling of information changes — for example, if a future
        version adds a feature that works differently — this policy will be
        updated before or alongside that change, and the “Last updated” date
        above will change with it.
      </p>
    ),
  },
  {
    id: 'contact',
    heading: 'Contact',
    body: (
      <p>
        Questions about this policy or about how Spandan handles information
        can be sent to <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        You can also use the <Link to="/contact">contact page</Link>.
      </p>
    ),
  },
]

export default function Privacy() {
  return (
    <LegalPage
      seoTitle="Privacy Policy — Spandan"
      seoDescription="Spandan Privacy Policy — how the extension accesses and uses browser tab and playback information."
      title="Privacy Policy"
      lastUpdated={LEGAL_LAST_UPDATED}
      intro={
        <p>
          Spandan works inside your browser. This policy explains what tab and
          playback information the extension accesses, why it needs it, and
          what it does not do with it.
        </p>
      }
      sections={sections}
    />
  )
}
