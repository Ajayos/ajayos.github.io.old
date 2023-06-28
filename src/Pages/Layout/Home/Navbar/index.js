import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import {
	Box,
	Link,
	Button,
	Drawer,
	Typography,
	Avatar,
	Stack,
} from "@mui/material";
import useResponsive from "../../../../hooks/useResponsive";
// import { useAuth } from "../../../contexts/AuthContext";
import Scrollbar from "../../../../components/scrollbar";
import NavSection from "../../../../components/nav-section";
// import PROFILE from "https://github.com/Ajayos.png";
import UserConfig from "./UserConfig";


const PROFILE = "https://github.com/Ajayos.png";
// import AdminConfig from "./AdminConfig";


const NAV_WIDTH = 280;

const StyledAccount = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	padding: theme.spacing(2, 2.5),
	borderRadius: Number(theme.shape.borderRadius) * 1.5,
	backgroundColor: alpha(theme.palette.grey[500], 0.12),
}));

export default function Nav({ openNav, onCloseNav }) {
	// const { isAuthenticated, access } = useAuth();
	const [user, SetUser] = useState({
		name: "Ajay o s",
		email: "ajayosakhub@gmail.com",
		pic: "https://github.com/Ajayos.png",
	});
	const { pathname } = useLocation();

	const isDesktop = useResponsive("up", "lg");

	useEffect(() => {
		if (openNav) {
			onCloseNav();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname]);

	const renderContent = (
		<Scrollbar
			sx={{
				height: 1,
				"& .simplebar-content": {
					height: 1,
					display: "flex",
					flexDirection: "column",
				},
			}}
		>
			<Box sx={{ px: 2.5, py: 3, display: "inline-flex" }}>
				<Avatar
					src={PROFILE}
					sx={{ width: 50, height: 50, marginRight: "20px" }}
				/>
				<Typography
					variant='h3'
					sx={{
						color: "black",
						position: "relative",
						marginTop: "8px",
						marginLeft: "10px",
					}}
				>
					Mi LIBRO
				</Typography>
			</Box>

			<Box sx={{ mb: 5, mx: 2.5 }}>
				<Link underline='none'>
					<StyledAccount>
						<Avatar src={user.pic} alt={user.name} />

						<Box sx={{ ml: 2 }}>
							<Typography variant='subtitle2' sx={{ color: "text.primary" }}>
								{user.name} {" | "} {"USER"}
							</Typography>
							<Typography variant='subtitle2' sx={{ color: "text.primary" }}>
								{user.email}
							</Typography>
						</Box>
					</StyledAccount>
				</Link>
			</Box>
			<NavSection data={UserConfig} />

			<Box sx={{ flexGrow: 1 }} />
		</Scrollbar>
	);

	return (
		<Box
			component='nav'
			sx={{
				flexShrink: { lg: 0 },
				width: { lg: NAV_WIDTH },
			}}
		>
			{isDesktop ? (
				<Drawer
					open
					variant='permanent'
					PaperProps={{
						sx: {
							width: NAV_WIDTH,
							bgcolor: "background.default",
							borderRightStyle: "dashed",
						},
					}}
				>
					{renderContent}
				</Drawer>
			) : (
				<Drawer
					open={openNav}
					onClose={onCloseNav}
					ModalProps={{
						keepMounted: true,
					}}
					PaperProps={{
						sx: { width: NAV_WIDTH },
					}}
				>
					{renderContent}
				</Drawer>
			)}
		</Box>
	);
}
