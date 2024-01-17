let instance: any = () => {};

export default async (...args) => {
    return instance(...args);
};

export function setInstance(ins: any) {
    instance = ins;
}
