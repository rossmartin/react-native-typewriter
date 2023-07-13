import { TextStyle, ViewProps } from 'react-native'

export interface TypewriterProps extends ViewProps {
  textArray: string[]
  speed?: number
  loop?: boolean
  delay?: number
  textStyle?: TextStyle
  cursorStyle?: TextStyle
  onFinish?: () => void
}
