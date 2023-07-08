/**
 * @description: env类型转换
 * @author: 斑马兽
 */
import _ from "lodash";
const env: any = _.cloneDeep(import.meta.env);

// 遍历env对象，将值为true的转换为布尔值，值为数字的转换为数字
Object.entries(import.meta.env as Record<string, any>).forEach(
	([key, value]) => {
		if (value == "true" || value == "false") {
			env[key] = value == "true" ? true : false;
		} else if (/^\d+$/.test(value)) env[key] = Number(value);
		else if (value == "null") env[key] = null;
		else if (value == "undefined") env[key] = undefined;
	}
);

export default env as ViteEnv;
