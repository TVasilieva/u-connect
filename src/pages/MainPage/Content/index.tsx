import { FC } from 'react'

import Popular from '../../Popular'
import { IProps } from './types'

const Content: FC<IProps> = ({ content }) => {
    return (
        content === "popular" ? <Popular /> : <div></div>
    )
}

export default Content