import cac from "cac"

export function sum(n1: number, n2: number) {
  return n1 + n2
}

function main() {
  const cli = cac("ts-cli-starter")
  cli.command("<first> <second>", "Sum tow number")
    .action((first, second) => {
      console.log(sum(Number(first), Number(second)))
    })
  cli.parse()
}

main()