import React from 'react'

import { Section, Layout, Avatar } from '@dmikhaylishin/ui'

export const App = () => (
  <Layout column>
    <Section>
      <Layout justify-center align-center>
        <Avatar
          color="secondary"
          src="https://sun9-24.userapi.com/impg/c857224/v857224090/f7973/X1lGoF_5gZk.jpg?size=1080x1076&quality=96&sign=505f8c10111081127238854a1fbedef9&type=album"
        />
      </Layout>
    </Section>
    <Section>
      <Layout>Timeline</Layout>
    </Section>
  </Layout>
)
