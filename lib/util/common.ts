export function typedNull<T>(): T {
    return null as unknown as T;
}

export function isObjectEmpty(objectName: object) {
    return Object.keys(objectName).length === 0;
}

