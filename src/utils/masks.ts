export const formatCurrency = (amount: number) => {
  return new Intl
    .NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    })
    .format(amount)
}

export const onlyNumbers = (txt: string) => txt.replace(/\D/g, "")

export const typingFormatReal = (amount: string | number) => {
  let tmp = onlyNumbers(String(amount))
    .replace(/([0-9]{2})$/g, ",$1")

  if (tmp.length > 6) tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2")
  if (tmp.length > 10) tmp = tmp.replace(/([0-9]{3})\.([0-9]{3}),([0-9]{2}$)/g, ".$1.$2,$3")
  if (tmp.length > 14) tmp = tmp.replace(/([0-9]{3})\.([0-9]{3})\.([0-9]{3}),([0-9]{2}$)/g, ".$1.$2.$3,$4")

  if (tmp === "0" || tmp === "NaN") return "0,00"

  if (tmp.substring(0, 1) === ",") tmp = `0${tmp}`
  else if (tmp.length > 4 && tmp.substring(0, 1) === "0") tmp = tmp.substring(1)
  else if (tmp.length === 1) tmp = `0,0${tmp}`

  return tmp
}

export const formatFloat = (amount: string) => {
  const amountFormatReal = typingFormatReal(amount).replace(".", "").replace(",", ".")
  return parseFloat(amountFormatReal)
}
