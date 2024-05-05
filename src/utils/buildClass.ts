const buildClass = (...classes: (string | undefined)[]): string =>
    classes.reduce((className, newClass) =>
        newClass && newClass.length > 0 ? className?.concat(` ${newClass}`) : className,
    ) ?? '';

export default buildClass;
