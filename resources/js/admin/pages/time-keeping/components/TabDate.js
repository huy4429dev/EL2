import React from 'react'
import { Tabs} from 'antd';

export default function TabDate() {
    const { TabPane } = Tabs;
    const today = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = days[today.getDay() - 1];
    return (
        <div>
            <Tabs defaultActiveKey="Sunday" style={{ height: 220 }}>
                {days.map(i => (
                    <TabPane tab={`${i}`} key={i} >
                        To day is {i}
                    </TabPane>
                ))}
            </Tabs>
        </div>
    )
}
