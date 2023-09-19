import React from 'react';
import {FiDatabase, FiHome} from 'react-icons/fi';
import {BiNetworkChart} from "react-icons/bi";

export const sidebarData = [
    {
        id: 'root',
        title: 'Дашборд',
        icon: <FiHome />,
        links: [
            {
                id: '1',
                title: 'Какой-то дашборд',
            },
        ],
    },
    {
        id: '2',
        title: 'CMDB',
        icon: <FiDatabase />,
        links: [
            {
                id: '3',
                title: 'Серверы и ПК',
            },
            {
                id: '4',
                title: 'Гипервизоры и вирт. машины',
            },
            {
                id: '5',
                title: 'Принтеры и МФУ',
            },
            {
                id: '6',
                title: 'Сетевые устройства',
            },
        ],
    },
    {
        id: '7',
        title: 'Сеть',
        icon: <BiNetworkChart />,
        links: [
            {
                id: '8',
                title: 'Какая-то сеть',
            },
        ],
    },
];

export const CMDBData = [
    {
        id: '1',
        isActive: true,
        name: 'Server 1',
        type: 'Server',
        location: 'Data Center 1',
        orgUnit: 'IT Department',
        invNumber: 'INV-12345',
        tags: ['Red', 'High Priority'],
        dateOfCreating: '20.09.21',
        dateOfUpdating: '15.08.22',
        auditDate: '05.07.23',
    },
    {
        id: '2',
        isActive: false,
        name: 'Workstation 1',
        type: 'PC',
        location: 'Office Room 101',
        orgUnit: 'Accounting',
        invNumber: 'INV-54321',
        tags: ['Blue', 'Low Priority'],
        dateOfCreating: '12.03.20',
        dateOfUpdating: '25.06.21',
        auditDate: '10.09.22',
    },
    {
        id: '3',
        isActive: true,
        name: 'Server 2',
        type: 'Server',
        location: 'Data Center 2',
        orgUnit: 'IT Department',
        invNumber: 'INV-67890',
        tags: ['Green', 'Medium Priority'],
        dateOfCreating: '05.11.19',
        dateOfUpdating: '18.04.21',
        auditDate: '30.03.22',
    },
    {
        id: '4',
        isActive: true,
        name: 'Workstation 2',
        type: 'PC',
        location: 'Office Room 201',
        orgUnit: 'Sales',
        invNumber: 'INV-98765',
        tags: ['Yellow', 'High Priority'],
        dateOfCreating: '15.08.18',
        dateOfUpdating: '10.12.19',
        auditDate: '12.05.20',
    },
    {
        id: '5',
        isActive: false,
        name: 'Server 3',
        type: 'Server',
        location: 'Data Center 3',
        orgUnit: 'IT Department',
        invNumber: 'INV-45678',
        tags: ['Red', 'Low Priority'],
        dateOfCreating: '30.01.17',
        dateOfUpdating: '22.06.18',
        auditDate: '05.09.19',
    },
    {
        id: '6',
        isActive: true,
        name: 'Workstation 3',
        type: 'PC',
        location: 'Office Room 301',
        orgUnit: 'HR',
        invNumber: 'INV-54321',
        tags: ['Blue', 'Medium Priority'],
        dateOfCreating: '10.12.16',
        dateOfUpdating: '28.03.18',
        auditDate: '20.06.19',
    },
    {
        id: '7',
        isActive: true,
        name: 'Server 4',
        type: 'Server',
        location: 'Data Center 1',
        orgUnit: 'IT Department',
        invNumber: 'INV-23456',
        tags: ['Green', 'High Priority'],
        dateOfCreating: '02.05.15',
        dateOfUpdating: '15.09.16',
        auditDate: '08.12.17',
    },
    {
        id: '8',
        isActive: false,
        name: 'Workstation 4',
        type: 'PC',
        location: 'Office Room 401',
        orgUnit: 'Marketing',
        invNumber: 'INV-87654',
        tags: ['Yellow', 'Low Priority'],
        dateOfCreating: '17.08.14',
        dateOfUpdating: '30.01.16',
        auditDate: '02.05.17',
    },
    {
        id: '9',
        isActive: true,
        name: 'Server 5',
        type: 'Server',
        location: 'Data Center 2',
        orgUnit: 'IT Department',
        invNumber: 'INV-34567',
        tags: ['Red', 'Medium Priority'],
        dateOfCreating: '21.03.13',
        dateOfUpdating: '12.07.15',
        auditDate: '15.10.16',
    },
    {
        id: '10',
        isActive: true,
        name: 'Workstation 5',
        type: 'PC',
        location: 'Office Room 501',
        orgUnit: 'Finance',
        invNumber: 'INV-76543',
        tags: ['Blue', 'High Priority'],
        dateOfCreating: '08.12.12',
        dateOfUpdating: '05.06.14',
        auditDate: '20.09.15',
    },
    {
        id: '11',
        isActive: false,
        name: 'Server 6',
        type: 'Server',
        location: 'Data Center 3',
        orgUnit: 'IT Department',
        invNumber: 'INV-12345',
        tags: ['Green', 'Low Priority'],
        dateOfCreating: '15.06.11',
        dateOfUpdating: '10.01.13',
        auditDate: '12.03.14',
    },
    {
        id: '12',
        isActive: true,
        name: 'Workstation 6',
        type: 'PC',
        location: 'Office Room 601',
        orgUnit: 'Engineering',
        invNumber: 'INV-65432',
        tags: ['Yellow', 'Medium Priority'],
        dateOfCreating: '30.09.10',
        dateOfUpdating: '25.04.12',
        auditDate: '08.08.13',
    },
    {
        id: '13',
        isActive: true,
        name: 'Server 7',
        type: 'Server',
        location: 'Data Center 1',
        orgUnit: 'IT Department',
        invNumber: 'INV-23456',
        tags: ['Red', 'High Priority'],
        dateOfCreating: '12.02.09',
        dateOfUpdating: '05.07.10',
        auditDate: '10.11.11',
    },
    {
        id: '14',
        isActive: false,
        name: 'Workstation 7',
        type: 'PC',
        location: 'Office Room 701',
        orgUnit: 'HR',
        invNumber: 'INV-98765',
        tags: ['Blue', 'Low Priority'],
        dateOfCreating: '25.07.08',
        dateOfUpdating: '15.12.09',
        auditDate: '02.03.11',
    },
    {
        id: '15',
        isActive: true,
        name: 'Server 8',
        type: 'Server',
        location: 'Data Center 2',
        orgUnit: 'IT Department',
        invNumber: 'INV-34567',
        tags: ['Green', 'Medium Priority'],
        dateOfCreating: '10.12.07',
        dateOfUpdating: '28.04.09',
        auditDate: '15.09.10',
    },
    {
        id: '16',
        isActive: true,
        name: 'Workstation 8',
        type: 'PC',
        location: 'Office Room 801',
        orgUnit: 'Marketing',
        invNumber: 'INV-87654',
        tags: ['Yellow', 'High Priority'],
        dateOfCreating: '28.03.06',
        dateOfUpdating: '20.08.07',
        auditDate: '12.01.09',
    },
    {
        id: '17',
        isActive: false,
        name: 'Server 9',
        type: 'Server',
        location: 'Data Center 3',
        orgUnit: 'IT Department',
        invNumber: 'INV-12345',
        tags: ['Red', 'Low Priority'],
        dateOfCreating: '05.09.05',
        dateOfUpdating: '30.12.06',
        auditDate: '05.03.08',
    },
    {
        id: '18',
        isActive: true,
        name: 'Workstation 9',
        type: 'PC',
        location: 'Office Room 901',
        orgUnit: 'Finance',
        invNumber: 'INV-65432',
        tags: ['Blue', 'Medium Priority'],
        dateOfCreating: '20.02.04',
        dateOfUpdating: '15.07.05',
        auditDate: '10.11.06',
    },
    {
        id: '19',
        isActive: true,
        name: 'Server 10',
        type: 'Server',
        location: 'Data Center 1',
        orgUnit: 'IT Department',
        invNumber: 'INV-23456',
        tags: ['Green', 'High Priority'],
        dateOfCreating: '15.06.03',
        dateOfUpdating: '10.01.04',
        auditDate: '02.03.05',
    },
    {
        id: '20',
        isActive: false,
        name: 'Workstation 10',
        type: 'PC',
        location: 'Office Room 1001',
        orgUnit: 'Engineering',
        invNumber: 'INV-98765',
        tags: ['Red', 'Low Priority'],
        dateOfCreating: '30.09.02',
        dateOfUpdating: '25.04.03',
        auditDate: '08.08.04',
    },
];