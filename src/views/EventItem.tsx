import React from 'react';

export interface EventItem {
    id?: number | string;
    title: string;
    image?: string;
    time?: string;
    duration?: number | string;
    description?: string;
    type?: string;
    phone?: number;
    email?: string;
    place?: string;
}