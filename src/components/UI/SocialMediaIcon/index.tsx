import { IconButton, Tooltip } from '@radix-ui/themes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
import { Text } from '../RadixComponents/Typography/Text'

type platformType = 'linkedin' | 'facebook' | 'instagram' | 'twitter' | 'youtube'

const TooltipContent: React.FC<{ text: string }> = ({ text }) => {
  return (
    <Text weight="regular" size="1">
      {text}
    </Text>
  )
}

export const SocialMediaIcon: React.FC<{
  platform: platformType
  link: string
}> = ({ platform, link }) => {
  const iconMap = {
    facebook: {
      icon: faFacebookF,
      tooltip: <TooltipContent text="Facebook" />,
    },
    linkedin: {
      icon: faLinkedinIn,
      tooltip: <TooltipContent text="LinkedIn" />,
    },
    instagram: {
      icon: faInstagram,
      tooltip: <TooltipContent text="Instagram" />,
    },
    twitter: {
      icon: faTwitter,
      tooltip: <TooltipContent text="Twitter" />,
    },
    youtube: {
      icon: faYoutube,
      tooltip: <TooltipContent text="YouTube" />,
    },
  }

  if (platform && link) {
    return (
      <Link href={link} target="_blank">
        <Tooltip content={iconMap[platform].tooltip}>
          <IconButton size="2" color="gray" radius="medium" highContrast>
            <FontAwesomeIcon
              icon={iconMap[platform].icon}
              style={{ width: '1.3em', height: '1.3em' }}
              color="var(--yellow-5)"
            />
          </IconButton>
        </Tooltip>
      </Link>
    )
  }

  return null
}
