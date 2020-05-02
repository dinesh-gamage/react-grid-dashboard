export function evalInScope(vars: any, code: string): Function {
    let script = '';
    let keys = Object.keys(vars);
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        script += `const ${key} = vars['${key}'];\n`;
    }
    script += '\n' + code;
    let f = Function('vars', script);
    return () => f(vars);
}