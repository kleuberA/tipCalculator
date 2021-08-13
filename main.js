function reset(){
	$('.total, .totalTip').text(msg.resetTotals);
	$('.valor, .numberPeoples, .custom').val('');
}

function valor(numero){
	let valorInput = $('.valor').val();
	let numberPeoples = $('.numberPeoples').val();
	let porcentagem = 0;
	let custom = $('.custom').val();
	if(custom == ''){
		porcentagem = (numero / 100);
	}else{
		porcentagem = (custom / 100);
	}


	if(numberPeoples == 0){
		$('.erroMsg').css('display', 'inline');
		$('.numberPeoples').addClass('numberPeoplesErro')
	}else{
		$('.erroMsg').css('display', 'none');
		$('.numberPeoples').removeClass('numberPeoplesErro')
		let totalTipAmount = ((porcentagem * parseFloat(valorInput))/ numberPeoples)
		.toFixed(2)
		.replace('.','.');

		let total = (((valorInput * porcentagem) + parseFloat(valorInput)) / numberPeoples).toFixed(2);
		$('.total').text('$' + total);
		$('.totalTip').text('$' + totalTipAmount);
	}

}
const msg = {
	msgErroPeoples: 'É necessario colocar a quantidade de pessoas',
	resetTotals: '$0.00'
}
$('.reset').click(function(event) {
	reset();
})