import React from 'react';

export interface Event {
    id?: number | string;
    title: string;
    time?: string;
    description?: string;
    duration?: number | string;
    type?: string;
    image?: string;
    phone?: number;
    email?: string;
    place?: string;
}