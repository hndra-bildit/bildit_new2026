// Copyright 2026, BILDIT, INC.
//
// Licensed under the ENT License (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      https://bildit.co/ENTLicense
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
//
// See the License for the specific language governing permissions and
// limitations under the License.
//
/* README:

  This file is used to define the dependencies for the CMS. These dependencies
  are used in the CMS to render components, pages, or banners using local modules. */
/* node_modules — React & Next only. */
'use client'
import * as React from 'react'
/* Local modules — import as a namespace, then add a matching cmsDependencies entry.
 *
 * Example:
 *
 *   import * as Example from '@/components/Example'
 *
 *   // In cmsDependencies:
 *   '@/components/Example': { module: Example },
 */
import * as Components from '@/app/components/Components'
import { getRemoteProps } from '@bildit-platform/nextjs'
import * as LucideReact from 'lucide-react'
import * as Next from 'next/client'
import * as NextForm from 'next/form'
import * as NextImage from 'next/image'
import * as NextLink from 'next/link'
import * as NextNavigation from 'next/navigation'
import * as NextScript from 'next/script'
import * as NextWebVitals from 'next/web-vitals'
import * as ReactDOM from 'react-dom'
import * as ReactDOMClient from 'react-dom/client'
import * as JsxDevRuntime from 'react/jsx-dev-runtime'
import * as JsxRuntime from 'react/jsx-runtime'
import * as SwiperModules from 'swiper/modules'
import * as SwiperReact from 'swiper/react'

interface Dependency {
  module: unknown
  globalName?: string
}

const cmsDependencies: Record<string, Dependency> = {
  'next/client': {
    module: Next
  },
  'next/form': {
    module: NextForm
  },
  'next/image': {
    module: NextImage
  },
  'next/link': {
    module: NextLink
  },
  'next/navigation': {
    module: NextNavigation
  },
  'next/script': {
    module: NextScript
  },
  'next/web-vitals': {
    module: NextWebVitals
  },
  'react': {
    module: React
  },
  'react/jsx-runtime': {
    module: JsxRuntime
  },
  'react/jsx-dev-runtime': {
    module: JsxDevRuntime
  },
  'react-dom': {
    module: ReactDOM
  },
  'react-dom/client': {
    module: ReactDOMClient
  },
  'lucide-react': {
    module: LucideReact,
    globalName: 'lucideReact'
  },
  '@components': {
    module: Components
  },
  '@/app/components/Components': {
    module: Components
  },
  'swiper/modules': {
    module: SwiperModules
  },
  'swiper/react': {
    module: SwiperReact
  }
}
export default cmsDependencies
declare global {
  interface Window {
    cmsDependencies: Record<string, unknown>
    React: typeof React
    ReactDOM: typeof ReactDOM & typeof ReactDOMClient
    remoteProps: typeof getRemoteProps
    LucideReact?: typeof LucideReact
  }
}

if (typeof window !== 'undefined') {
  window.React = React
  window.ReactDOM = { ...ReactDOM, ...ReactDOMClient } as typeof window.ReactDOM
  window.cmsDependencies = cmsDependencies as unknown as Record<string, unknown>
  window.remoteProps = getRemoteProps
}
