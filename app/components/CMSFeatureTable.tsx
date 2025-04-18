import React from 'react'
import BodyTwo from './BodyTwo'
import SubTitleFive from './SubTitleFive'
import { FaCheckCircle } from 'react-icons/fa'

const features = [
  {
    title: 'Multi-channel platform',
    description: 'Create campaigns for web, mobile, email and push notifications from one CMS'
  },
  {
    title: 'Unlimited users',
    description: 'Add as many team members as you need for simultaneous editing and updates'
  },
  {
    title: 'Unlimited versioning',
    description: 'Add as many team members as you need for simultaneous editing and updates'
  },
  {
    title: 'Unlimited content storage',
    description: 'Focus on growth without worrying about storage restrictions'
  },
  {
    title: 'Code library',
    description: 'Code-as-content library for the most common types of campaigns — no coding experience necessary'
  },
  {
    title: 'Multiple content types',
    description: 'Build and deploy banners, product carousels, GIFs, videos and more'
  },
  {
    title: 'Drag-and-drop builder',
    description: 'Sort banner order display by dragging and dropping content snippets within CMS'
  },
  {
    title: 'Native preview',
    description: 'Preview code before pushing it into production, for iOS, Android, and web'
  },
  {
    title: 'Automated archiving',
    description: 'Stop wasting time on removing expired campaigns with automated content archiving'
  },
  {
    title: 'Email copy generator',
    description:
      'Generate highly converting email subject lines, schedule email campaigns and capture analytics for ongoing optimization'
  }
]

const CMSFeaturesTable: React.FC = () => {
  return (
    <table className="w-full border-collapse rounded-lg overflow-hidden shadow-md">
      <tbody>
        {features.map((feature, index) => (
          <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-300'}>
            <td className="py-5 px-2 text-xl text-neutral-900 font-gt-walsheim w-1/3">
              <SubTitleFive content={feature.title} />
            </td>
            <td className="py-5 px-2">
              <BodyTwo content={feature.description} className="!text-neutral-900 !my-0" />
            </td>
            <td className="p-4 text-cms-rose text-right">
              <FaCheckCircle className="inline-block w-5 h-5 text-pink" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default CMSFeaturesTable
