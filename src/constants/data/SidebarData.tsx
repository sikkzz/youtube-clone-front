import {
	SideHomeIcon,
	SideShortsIcon,
	SideSubIcon,
	SideLibraryIcon,
	SideShowIcon,
	SideMyVideoIcon,
	SideAfterShowIcon,
	SideLikeVideoIcon,
	SideHotIcon,
	SideMusicIcon,
	SideMovieIcon,
	SideLiveIcon,
	SideGameIcon,
	SideSportIcon,
	SideSettingIcon,
	SideReportIcon,
	SideCenterIcon,
	SideInfoIcon,
} from "../Icon/icon";

const SIZE = 24;
const WHITE = "#fff";

const ListHomeData = [
	{
		icon: <SideHomeIcon size={SIZE} color={WHITE} />,
		title: "홈",
		link: "/",
	},
	{
		icon: <SideShortsIcon size={SIZE} color={WHITE} />,
		title: "Shorts",
		link: "/shorts",
	},
	{
		icon: <SideSubIcon size={SIZE} color={WHITE} />,
		title: "구독",
		link: "/feed/subscription",
	},
];

const ListVideoData = [
	{
		icon: <SideLibraryIcon size={SIZE} color={WHITE} />,
		title: "보관함",
		link: "/",
	},
	{
		icon: <SideShowIcon size={SIZE} color={WHITE} />,
		title: "시청 기록",
		link: "/",
	},
	{
		icon: <SideMyVideoIcon size={SIZE} color={WHITE} />,
		title: "내 동영상",
		link: "/",
	},
	{
		icon: <SideAfterShowIcon size={SIZE} color={WHITE} />,
		title: "나중에 볼 동영상",
		link: "/",
	},
	{
		icon: <SideLikeVideoIcon size={SIZE} color={WHITE} />,
		title: "좋아요 표시한 동영상",
		link: "/",
	},
];

const ListExploreData = [
	{
		icon: <SideHotIcon size={SIZE} color={WHITE} />,
		title: "인기 급상승",
		link: "/",
	},
	{
		icon: <SideMusicIcon size={SIZE} color={WHITE} />,
		title: "음악",
		link: "/",
	},
	{
		icon: <SideMovieIcon size={SIZE} color={WHITE} />,
		title: "영화",
		link: "/",
	},
	{
		icon: <SideLiveIcon size={SIZE} color={WHITE} />,
		title: "실시간",
		link: "/",
	},
	{
		icon: <SideGameIcon size={SIZE} color={WHITE} />,
		title: "게임",
		link: "/",
	},
	{
		icon: <SideSportIcon size={SIZE} color={WHITE} />,
		title: "스포츠",
		link: "/",
	},
];

const ListSettingData = [
	{
		icon: <SideSettingIcon size={SIZE} color={WHITE} />,
		title: "설정",
		link: "/",
	},
	{
		icon: <SideReportIcon size={SIZE} color={WHITE} />,
		title: "신고 기록",
		link: "/",
	},
	{
		icon: <SideCenterIcon size={SIZE} color={WHITE} />,
		title: "고객센터",
		link: "/",
	},
	{
		icon: <SideInfoIcon size={SIZE} color={WHITE} />,
		title: "의견 보내기",
		link: "/",
	},
];

export const SidebarData = [
	{
		title: "home",
		list: ListHomeData,
	},
	{
		title: "video",
		list: ListVideoData,
	},
	{
		title: "explore",
		list: ListExploreData,
	},
	{
		title: "setting",
		list: ListSettingData,
	},
];

const FooterPrimaryData = [
	{
		title: "정보",
		link: "/",
	},
	{
		title: "보도자료",
		link: "/",
	},
	{
		title: "저작권",
		link: "/",
	},
	{
		title: "문의하기",
		link: "/",
	},
	{
		title: "크리에이터",
		link: "/",
	},
	{
		title: "광고",
		link: "/",
	},
	{
		title: "개발자",
		link: "/",
	},
];

const FooterSecondaryData = [
	{
		title: "약관",
		link: "/",
	},
	{
		title: "개인정보처리방침",
		link: "/",
	},
	{
		title: "정책 및 안전",
		link: "/",
	},
	{
		title: "WeTube 작동의 원리",
		link: "/",
	},
	{
		title: "새로운 기능 테스트하기",
		link: "/",
	},
];

export const SidebarFooterData = [
	{
		title: "primary",
		list: FooterPrimaryData,
	},
	{
		title: "secondary",
		list: FooterSecondaryData,
	},
];