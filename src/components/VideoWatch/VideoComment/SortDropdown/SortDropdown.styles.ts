import styled from "styled-components";

export const DropdownLayout = styled.div`
	position: absolute;
	left: 0;
	top: 40px;
	z-index: 50;
`;

export const DropdownDiv = styled.div`
	border-radius: 8px;
	max-height: 122px;
	max-width: 98px;
	width: 98px;
	height: 122px;
	position: relative;

	& > ul {
		background-color: #212121;
		color: #f1f1f1;
		border-radius: 12px;
		overflow: hidden;
		padding: 8px 0;

		& > li {
			cursor: pointer;
			-webkit-font-smoothing: antialiased;
			align-items: center;
			display: flex;
			font-family: Roboto, Noto, sans-serif;
			font-size: 14px;
			line-height: 24px;
			min-height: 48px;
			padding: 0 16px;
			position: relative;
		}

		& > .active {
			background-color: rgba(255, 255, 255, 0.1);
		}
	}
`;
