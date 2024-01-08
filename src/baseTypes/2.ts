type anything = any;

let anything: anything = -20;
anything = 'Text';
anything = {};

// Second version

type anything1 = unknown;

let anything1: anything1 = -20;
anything1 = 'Text';
anything1 = {};

export {};