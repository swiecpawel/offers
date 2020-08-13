import React from "react";
import shallow from "enzyme";
import RightBar from "./RightBar"

it('should render LoginBut', () => {
    const wrapper = shallow(<RightBar disJob={true}/>);
    expect(wrapper.exists(LoginBut)).toBeTruthy();
});

it('should render correctly', () => {
    const component = shallow(<RightBar disJob={false}/>);

    expect(component).toMatchSnapshot();
});