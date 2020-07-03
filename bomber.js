const fetch = require("node-fetch");
const readline = require("readline");

var banner = `
 ____________________________________________________
|                                                    |
| [--] Name: SMSBomer                                |
|                                                    |
| [--] Have Services: 51                             |
|                                                    |
| [--] Created by: 3peekawOwD                        |
|                                                    |
| [--] Telegram channel: @3peekawOwD                 |
|                                                    |
| [--] Version: 1.0.6                                |
|____________________________________________________|
`

console.log(banner)
run()

async function run() {

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

await rl.question("Номер для атаки (79xxxxxxxxx)-->> ", function(name) {
    rl.close();
    bomb(name)
})

}

function bomb(phone) {
	var _phone = phone;
	if(_phone[0] == "+") {
		_phone = _phone.replace("+", "")
	}
	else if(_phone[0] == "8") {
		_phone = _phone.replace("8", "7");
	}
	else if(_phone[0] == "9") {
		_phone = "7" + _phone;
	}
	var _phone9 = _phone.slice(1);
	var _phoneAresBank = '+'+_phone[0]+'('+_phone[1] + _phone[2] + _phone[3] +')'+_phone[4] + _phone[5] + _phone[6] +'-'+_phone[7] + _phone[8] +'-'+_phone[9] + _phone[10]
	var _phonePizzahut = '+'+_phone[0]+' ('+_phone[1] + _phone[2] + _phone[3] +') '+_phone[4] + _phone[5] + _phone[6] +' '+_phone[7] + _phone[8] +' '+_phone[9] + _phone[10]

	//console.log(_phonePizzahut)

	/*try {

	} catch(e) {

	}*/

	try {
		fetch("", {
        method: 'post',
        body:    {
        	
        },
        headers: {
         'Content-Type': 'application/json'
        })
	} catch(e) {
		
	}
}