//Sayı Tahmişn Oyunu


        const randomNumber = Math.floor(Math.random() * 100) + 1;
        let attempts = 0;

        function checkGuess() {
            const guess = parseInt(document.getElementById('guess').value);
            attempts++;
            let resultMessage;

            if (guess === randomNumber) {
                resultMessage = `Tebrikler! Doğru tahmin ettiniz. Sayı ${randomNumber} idi. ${attempts} denemede bildiniz.`;
            } else if (guess < randomNumber) {
                resultMessage = 'Daha büyük bir sayı deneyin!';
            } else {
                resultMessage = 'Daha küçük bir sayı deneyin!';
            }

            document.getElementById('result').innerText = resultMessage;
        }




        //Tas Kagit Makas

        let userScore = 0;
        let computerScore = 0;

        function play(userChoice) {
            const choices = ['Taş', 'Kağıt', 'Makas'];
            const computerChoice = choices[Math.floor(Math.random() * choices.length)];

            let result;
            if (userChoice === computerChoice) {
                result = 'Berabere!';
            } else if (
                (userChoice === 'Taş' && computerChoice === 'Makas') ||
                (userChoice === 'Kağıt' && computerChoice === 'Taş') ||
                (userChoice === 'Makas' && computerChoice === 'Kağıt')
            ) {
                result = 'Kazandınız!';
                userScore++;
            } else {
                result = 'Kaybettiniz!';
                computerScore++;
            }

            document.getElementById('result').innerText = `Sizin seçiminiz: ${userChoice} - Bilgisayarın seçimi: ${computerChoice}\n${result}`;
            document.getElementById('score').innerText = `Kullanıcı: ${userScore} - Bilgisayar: ${computerScore}`;
        }