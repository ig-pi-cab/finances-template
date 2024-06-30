import { Box, useMediaQuery, useTheme } from '@mui/material';
import React from 'react'
import DashboardBox from '../../components/DashBoardBox';

type Props = {}

const gridTemplateLargeScreens = `
    "a b c"
    "a b c"
    "a b c"
    "a b f"
    "d e f"
    "d e f"
    "d h i"
    "g h i"
    "g h j"
    "g h j"
`
const gridTemplateSmallScreens =`
    "a"
    "a"
    "a"
    "a"
    "b"
    "b"
    "b"
    "c"
    "c"
    "c"
    "d"
    "d"
    "e"
    "e"
    "f"
    "f"
    "f"
    "g"
    "g"
    "g"
    "h"
    "h"
    "h"
    "i"
    "j"
    "j"

`

const Dashboard = (props:Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)")
    return <Box width="100%" height="100%" display="grid" gap="1.5rem"
    sx={
        isAboveMediumScreens ? {
        gridTemplateColums: "repeat(3,minmax(370px, 1fr))",
        gridTemplateRows: "repeat(10,minmax(60px, 1fr))",
        gridTemplateAreas: gridTemplateLargeScreens,
    }: {
        gridAutoColums: "1fr",
        gridAutoRows: "80px",
        gridTemplateAreas: gridTemplateSmallScreens
    }
}
    >
        <DashboardBox bgcolor="#fff" gridArea="a"></DashboardBox>
        <DashboardBox bgcolor="#fff" gridArea="b"></DashboardBox>
        <DashboardBox bgcolor="#fff" gridArea="c"></DashboardBox>
        <DashboardBox bgcolor="#fff" gridArea="d"></DashboardBox>
        <DashboardBox bgcolor="#fff" gridArea="e"></DashboardBox>
        <DashboardBox bgcolor="#fff" gridArea="f"></DashboardBox>
        <DashboardBox bgcolor="#fff" gridArea="g"></DashboardBox>
        <DashboardBox bgcolor="#fff" gridArea="h"></DashboardBox>
        <DashboardBox bgcolor="#fff" gridArea="j"></DashboardBox>
        <DashboardBox bgcolor="#fff" gridArea="i"></DashboardBox>
    </Box>
};

export default Dashboard