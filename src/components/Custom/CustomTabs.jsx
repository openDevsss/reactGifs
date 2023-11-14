import { TabsContainer } from "../MyProfile/style";

export function CustomTabs(props) {
  const { children, value, onChange } = props;

  return (
    <TabsContainer {...props} value={value} onChange={onChange}>
      {children}
    </TabsContainer>
  );
}
