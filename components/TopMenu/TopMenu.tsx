import React from 'react'
import { Box, Flex } from 'theme-ui';
import Logo from './Logo';
import TopMenuContainer from './TopMenuContainer';
import TopMenuList from './TopMenuList';

export default function TopMenu({navigations}: {navigations: Array<{title: string, links: Array<string>}>}) {
    return (
        <Flex
          as="nav"
          sx={{
            padding: "3xs",
            backgroundColor: "tertiaryScale.7",
            alignItems: "center",
            gap: "md",
          }}
        >
          <Box sx={{ padding: "sm" }}>
            <Logo height={40} width={40} />
          </Box>
          <Flex as="ul" sx={{ listStyle: "none", padding: 0, gap: "2xs" }}>
            {navigations.map((navigation) => {
              return (
                <TopMenuContainer
                  key={navigation.title}
                  title={navigation.title}
                >
                  <TopMenuList links={navigation.links} />
                </TopMenuContainer>
              );
            })}
          </Flex>
        </Flex>
    )
}
