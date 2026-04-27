import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  description: 'BILDIT Enterprise (ENT) license terms for the BILDIT Software. Copyright and subscription requirements.'
}

export default function EnterpriseLicensePage() {
  return (
    <main className="min-h-[60vh] bg-white text-neutral-900">
      <div className="mx-auto max-w-[720px] px-4 py-12 sm:px-6 md:py-16">
        <h1 className="font-[family-name:var(--font-uncut-sans)] text-2xl font-bold tracking-tight text-neutral-950 md:text-[1.75rem]">
          Enterprise License
        </h1>

        <div className="font-[family-name:var(--font-uncut-sans)] mt-8 space-y-6 text-[15px] leading-[1.75] text-neutral-800 md:text-base md:leading-[1.7]">
          <p>
            The BILDIT, INC. Enterprise (ENT) license (the &ldquo;ENT License&rdquo;)
            <br />
            <br />
            Copyright (c) 2017-present BILDIT, INC.
            <br />
            <br />
            With regard to the BILDIT Software:
          </p>

          <p>
            This software and associated documentation files (the &ldquo;Software&rdquo;) may only be used in
            production, if you (and any entity that you represent) have agreed to, and are in compliance with, the
            BILDIT Subscription Terms of Service, available at{' '}
            <Link
              href="https://bildit.co/terms-of-use"
              className="text-[#5b21b6] underline decoration-[#5b21b6]/30 underline-offset-2 hover:text-[#4c1d95]"
            >
              https://bilditon.com/terms-of-use
            </Link>{' '}
            (the &ldquo;ENT Terms&rdquo;), or other agreement governing the use of the Software, as agreed by you and
            BILDIT, INC., and otherwise have a valid BILDIT, INC. subscription. Subject to the foregoing sentence, you
            are free to modify this Software and publish patches to the Software.
          </p>

          <p>
            You agree that BILDIT, INC. and/or its licensors (as applicable) retain the all right, title, and interest
            in and to all such modifications and/or patches, and all such modifications and/or patches may only be used,
            copied, modified, displayed, distributed, or otherwise exploited with a valid BILDIT, INC. Enterprise
            subscription. Notwithstanding the foregoing, you may copy and modify the Software for development and
            testing purposes, without requiring a subscription. You agree that BILDIT, INC. and/or its licensors (as
            applicable) retai all rights, title, and interest in and to all such modifications.
          </p>

          <p>
            You are not granted any other rights beyond what is expressly stated herein. Subject to the foregoing, it is
            forbidden to copy, merge, publish, distribute, sublicense, and/or sell the Software. The full text of this
            ENT License shall be included in all copies or substantial portions of the Software.
          </p>

          <p className="uppercase">
            THE SOFTWARE IS PROVIDED &ldquo;AS IS&rdquo;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
            BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
            NON-INFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES, OR
            OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT, OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
            WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
          </p>

          <p>
            For all third-party components incorporated into the BILDIT, INC., those components are licensed under the
            original license provided by the owner of the applicable component.
          </p>
        </div>
      </div>
    </main>
  )
}
