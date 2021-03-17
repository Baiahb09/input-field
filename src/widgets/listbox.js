import * as WidgetUtils from './WidgetUtils'
import {Stringer} from '@techexp/jshelper'

const templates = {
  select: '<select{name}{id}{size}{multiple}>{options}</select>',
  group: '<optgroup label="{label}">{options}</optgroup>',
  option: '<option{disabled}{selected}{value}>{label}</option>'
}

export function contentToHtml(element) {
  if (!element) return ''

  return jsonToHtml(element.innerHTML)
}

export function jsonToHtml(json) {
  json = WidgetUtils.parseAndValidate(json, 'Listbox')
  if (!json) return ''

  const params = {
    name: json.name ? ` name="${json.name}"` : '',
    id: json.id ? ` id="${json.id}"` : '',
    size: json.size ? ` size="${json.size}"` : '',
    multiple: json.multiple ? ' multiple' : '',
    options: buildOptions(json.options)
  }
  return Stringer.replaceTemplate(templates.select, params, '{')
}

function buildOptionGroup(json) {
  const params = {
    label: json.label,
    options: buildOptions(json.options)
  }
  return Stringer.replaceTemplate(templates.group, params, '{')
}

function buildOptions(options) {
  if (!Array.isArray(options)) return ''

  const html = options.map(op => {
    if (op.options) return buildOptionGroup(op)
    return buildOption(op)
  })
  return html.join('\n')
}

function buildOption(option) {
  WidgetUtils.validateOption('Listbox', option)

  const value = option.value || option.label
  const params = {
    disabled: option.disabled ? ' disabled' : '',
    selected: option.selected ? ' selected' : '',
    label: option.label || option.value,
    value: ` value="${value}"`
  }
  return Stringer.replaceTemplate(templates.option, params, '{')
}