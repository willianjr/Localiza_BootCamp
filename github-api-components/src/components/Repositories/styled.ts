import styled from "styled-components";
import { Tabs, Tab  } from "react-bootstrap";

export const WrapperTabs = styled.div`
  font-size: 16px;
  width: 100%;
  margin-top: 16px;
`;

export const WrapperTabList =  styled(Tabs)`
  list-style-type: none;
  padding: 4px 10px 1px 10px;
  display: flex;
  margin: 0;
	border:none;
	a{
		background-color:blue;
	}
`;
//WrapperTabList.tabsRole = "TabList";

export const WrapperTab = styled(Tab)`

  user-select: none;
  cursor: pointer;
  z-index: 99999;



`;
//WrapperTab.tabsRole = "Tab";

export const WrapperTabPanel =  styled.div`
  padding: 2rem;
	border-radius:0.5rem;
	background: #fafafa;

`;
//WrapperTabPanel.tabsRole = "TabPanel";

export const WrapperList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
