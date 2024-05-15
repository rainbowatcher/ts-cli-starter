import cac from "cac"
import { sum } from "./util"

function main() {
    const cli = cac("ts-cli-starter")
    cli.command("<first> <second>", "Sum tow number")
        .action((first, second) => {
            console.log(sum(Number(first), Number(second)))
        })
    cli.parse()
}

main()
