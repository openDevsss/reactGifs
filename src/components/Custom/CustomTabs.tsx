import { TabsContainer } from "@components/UserProfile/style";

export function CustomTabs(props) {
  const { children, value, onChange } = props;

  return (
    <TabsContainer {...props} value={value} onChange={onChange}>
      {children}
    </TabsContainer>
  );
}
