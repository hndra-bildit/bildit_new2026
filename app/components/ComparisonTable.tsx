import cn from 'clsx'
import { AiFillCloseCircle } from 'react-icons/ai'
import { FaCheckCircle } from 'react-icons/fa'

interface dataProps {
  feature: string
  bildit: string
  sanity: string
  contentstack: string
  storyblock: string
}

const data: Array<dataProps> = [
  { feature: 'User Included', bildit: 'Unlimited', sanity: '24', contentstack: '10+', storyblock: '30 Users Included' },
  { feature: 'Admin User', bildit: 'Unlimited', sanity: 'Unlimited', contentstack: '❌', storyblock: 'Regular' },
  { feature: 'Traffic', bildit: 'Unlimited', sanity: '❌', contentstack: '❌', storyblock: '❌' },
  { feature: 'API CDN Requests (per Mo)', bildit: 'Unlimited', sanity: '10M', contentstack: '6M', storyblock: '❌' },
  { feature: 'Additional requests', bildit: '✅', sanity: '$1 per 250k', contentstack: '❌', storyblock: '❌' },
  { feature: 'API Requests (per Mo)', bildit: 'Unlimited', sanity: '2M', contentstack: '❌', storyblock: '❌' },
  { feature: 'Additional request', bildit: '✅', sanity: '$1 per 25k', contentstack: '❌', storyblock: '❌' },
  { feature: 'Assets', bildit: 'Unlimited', sanity: '500GB', contentstack: '5TB', storyblock: '❌' },
  { feature: 'Additional assets', bildit: '✅', sanity: '$1 per 2GB', contentstack: '❌', storyblock: '❌' },
  {
    feature: 'Bandwidth (per Mo)',
    bildit: 'Unlimited',
    sanity: '1TB',
    contentstack: '2TB',
    storyblock: '2 TB Traffic/Mo Included (Cumulative 24 TB/Y)'
  },
  {
    feature: 'Additional bandwidth',
    bildit: '✅',
    sanity: '$1 per 10GB',
    contentstack: '❌',
    storyblock: '$190/Mo for 1 TB of additional traffic'
  },
  { feature: 'Document', bildit: 'Unlimited', sanity: '50K', contentstack: '❌', storyblock: '❌' },
  {
    feature: 'Unique attribute (per dataset)',
    bildit: 'Unlimited',
    sanity: '10K',
    contentstack: '❌',
    storyblock: '❌'
  },
  {
    feature: 'Other Limitations',
    bildit: 'Unlimited',
    sanity: 'Unlimited Playground Projects',
    contentstack: '❌',
    storyblock: '3 Spaces Included'
  },
  { feature: 'Other Limitations', bildit: 'Unlimited', sanity: '6 Datasets', contentstack: '❌', storyblock: '❌' },
  { feature: 'Other Limitations', bildit: 'Unlimited', sanity: '❌', contentstack: '1+ Stacks', storyblock: '❌' },
  { feature: 'Other Limitations', bildit: 'Unlimited', sanity: '❌', contentstack: '3 Branches', storyblock: '❌' },
  {
    feature: 'Other Limitations',
    bildit: 'Unlimited',
    sanity: '❌',
    contentstack: '50+ Content Types',
    storyblock: '❌'
  },
  {
    feature: 'Other Limitations',
    bildit: 'Unlimited',
    sanity: '❌',
    contentstack: '10+ Languages/Locals',
    storyblock: '❌'
  },
  { feature: 'Other Limitations', bildit: 'Unlimited', sanity: '❌', contentstack: '5+ Roles', storyblock: '❌' },
  { feature: 'Reff App', bildit: '✅', sanity: '❌', contentstack: '❌', storyblock: '❌' },
  { feature: 'Made for SFCC', bildit: '✅', sanity: '❌', contentstack: '❌', storyblock: '❌' },
  { feature: 'SFCC SDK', bildit: '✅', sanity: '❌', contentstack: '❌', storyblock: '❌' },
  { feature: 'Product Management', bildit: '❌', sanity: '❌', contentstack: '❌', storyblock: '❌' },
  { feature: 'Category Management', bildit: '✅', sanity: '❌', contentstack: '❌', storyblock: '❌' },
  { feature: 'SFCC & App Deep Links', bildit: '✅', sanity: '❌', contentstack: '❌', storyblock: '❌' },
  { feature: 'Made for App', bildit: '✅', sanity: '❌', contentstack: '❌', storyblock: '❌' },
  {
    feature: 'Uptime',
    bildit: '99.95% Uptime SLA (Firebase)',
    sanity: '❌',
    contentstack: 'Available',
    storyblock: '99.9% Uptime SLA'
  },
  {
    feature: 'Activity Log',
    bildit: 'Activity Log',
    sanity: 'Full audit trail & History API',
    contentstack: 'Full audit trail & History API',
    storyblock: 'Extended Activity Log'
  },
  {
    feature: 'Activity Log',
    bildit: 'Access Logs In GCP',
    sanity: 'Access Logs',
    contentstack: '❌',
    storyblock: 'Restricted IP Address Range'
  },
  {
    feature: 'Analytics',
    bildit: 'RefApp Analytics',
    sanity: '❌',
    contentstack: 'Advance Analytics',
    storyblock: 'Organization Analytics'
  },
  {
    feature: 'Support',
    bildit: 'Slack Support',
    sanity: 'Community Support',
    contentstack: '❌',
    storyblock: 'Extended Support (Optional)'
  },
  { feature: 'Security', bildit: '❌', sanity: '❌', contentstack: '❌', storyblock: 'Security Audit (Optional)' },
  {
    feature: 'Access Control',
    bildit: '✅',
    sanity: 'Single Sign On (SSO)',
    contentstack: '❌',
    storyblock: 'Single Sign On (Optional)'
  },
  { feature: 'Access Control', bildit: '❌', sanity: 'Custom Access Control', contentstack: '❌', storyblock: '❌' },
  {
    feature: 'Payment Option',
    bildit: 'Invoicing',
    sanity: 'Pay by Card',
    contentstack: '❌',
    storyblock: 'Single Sign On (Optional)'
  },
  { feature: 'Onboarding', bildit: 'Onboarding & Training', sanity: '❌', contentstack: '❌', storyblock: '❌' },
  {
    feature: 'Customer Support Contact',
    bildit: 'Direct Contact',
    sanity: '❌',
    contentstack: 'Customer Success Manager',
    storyblock: '❌'
  },
  { feature: '24/7 Support', bildit: 'Slack', sanity: '❌', contentstack: '❌', storyblock: '❌' },
  { feature: 'Global CDN', bildit: '❌', sanity: '❌', contentstack: '❌', storyblock: '❌' },
  { feature: 'Region Deployment', bildit: '❌', sanity: '❌', contentstack: '❌', storyblock: '❌' },
  { feature: 'Cloudflare WAF', bildit: '❌', sanity: '❌', contentstack: '❌', storyblock: '❌' },
  {
    feature: 'Other Features',
    bildit: 'Backups',
    sanity: '❌',
    contentstack: '10+ Languages/Locals',
    storyblock: 'S3 Backups and Restore'
  },
  {
    feature: 'Content Scheduling',
    bildit: 'Scheduled Publishing',
    sanity: '❌',
    contentstack: 'Scheduling and Release',
    storyblock: '❌'
  }
]
export default function PricingTable() {
  const renderCell = (value: string) => {
    if (value.trim() === '✅') return <FaCheckCircle className="text-[#50C12E] text-xl inline-block" />
    if (value.trim() === '❌') return <AiFillCloseCircle className="text-[#E63535] text-xl inline-block" />
    return value
  }
  return (
    <div className="lg:p-6">
      {/* Table for larger screens */}
      <div className="hidden md:block overflow-x-auto px-10 py-8 rounded-2xl border border-gray-300 bg-white shadow-[0px_40px_80px_0px_rgba(0,0,0,0.1)]">
        <table className="w-full border-collapse border-t border-b border-gray-200 text-sm">
          <thead>
            <tr className="font-700 text-sm border-t border-b text-white bg-neutral-700 text-center">
              <th className="border-gray-300 px-4 py-2 text-left border-t border-b">Feature</th>
              <th className="border-gray-300 px-4 py-2 bg-gray-300 text-cms-rose border-t border-b">BILDIT</th>
              <th className="border-gray-300 px-4 py-2 border-t border-b">Sanity Business ($949)</th>
              <th className="border-gray-300 px-4 py-2 border-t border-b">Contentstack Grow ($4500)</th>
              <th className="border-gray-300 px-4 py-2 border-t border-b">Storyblock Enterprise ($2999)</th>
            </tr>
          </thead>
          <tbody className="text-sm lg:text-base text-neutral-900 border-t border-b  font-gt-walsheim leading-snug font-bold">
            {data.map((row, index) => (
              <tr key={index} className={cn('border-t border-b', index % 2 === 0 ? 'bg-white' : 'bg-gray-300')}>
                <td className="border-gray-300 px-4 py-2  border-t border-b py-5">{renderCell(row.feature)}</td>
                <td className="border-gray-300 px-4 py-2  border-t border-b font-semibold py-5">
                  {renderCell(row.bildit)}
                </td>
                <td className="border-gray-300 px-4 py-2 border-t border-b py-5">{renderCell(row.sanity)}</td>
                <td className="border-gray-300 px-4 py-2 border-t border-b py-5">{renderCell(row.contentstack)}</td>
                <td className="border-gray-300 px-4 py-2 border-t border-b py-5">{renderCell(row.storyblock)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View (Cards) */}
      <div className="md:hidden space-y-4 mt-5">
        {data.map((row, index) => (
          <div key={index} className="border border-gray-300 p-4 rounded-lg shadow-sm bg-white">
            <h3 className="text-lg font-semibold text-gray-700">{renderCell(row.feature)}</h3>
            <div className="flex justify-between items-center mt-2">
              <span className="text-pink-600 font-medium">BILDIT:</span>
              <span className="text-gray-800">{renderCell(row.bildit)}</span>
            </div>
            <div className="flex justify-between items-center mt-1">
              <span className="text-gray-600">Sanity:</span>
              <span className="text-gray-800">{renderCell(row.sanity)}</span>
            </div>
            <div className="flex justify-between items-center mt-1">
              <span className="text-gray-600">Contentstack:</span>
              <span className="text-gray-800">{renderCell(row.contentstack)}</span>
            </div>
            <div className="flex justify-between items-center mt-1">
              <span className="text-gray-600">Storyblock:</span>
              <span className="text-gray-800">{renderCell(row.storyblock)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
