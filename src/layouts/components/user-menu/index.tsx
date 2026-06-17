import React from 'react';
import { SmileOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Avatar, Dropdown, Space } from 'antd';

import { storage } from "@/utils/storage";

const defaultAvatar = 'https://via.placeholder.com/40';

const logout = () => {
    storage.removeToken()
    location.href = '/'
}

const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                1st menu item
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                2nd menu item (disabled)
            </a>
        ),
        icon: <SmileOutlined />,
        disabled: true,
    },
    {
        key: '3',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                3rd menu item (disabled)
            </a>
        ),
    },
    {
        key: '4',
        danger: true,
        label: (
            <div onClick={logout}>
                退出登录
            </div>
        ),
    },
];

const App: React.FC = () => (
    <Dropdown menu={{ items }} arrow>
        <a onClick={(e) => e.preventDefault()}>
            <Space>
                <Avatar src={defaultAvatar} />
                <span>Username</span>
            </Space>
        </a>
    </Dropdown>
);

export default App;