/**
 * Импорт функции writable из модуля 'svelte/store'
 * @function
 * @name writable
 * @memberof module:svelte/store
 * @type {import('svelte/store').writable}
 */
import { writable } from 'svelte/store';

/**
 * Флаг для отслеживания состояния.
 * @type {import('svelte/store').Writable<boolean>}
 */
export let flag = writable(false)

/**
 * Переменная, которая хранит выбранный автомобиль
 * @type {import('svelte/store').Writable<any>}
 */
export let car = writable(null) 

/**
 * Переменная, которая хранит выбранную организацию
 * @type {import('svelte/store').Writable<any>}
 */
export let organization = writable(null)



