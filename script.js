function toggle(section_id,button_id){

  document.getElementById("history-section").classList.add("hidden")
  document.getElementById("donation-section").classList.add("hidden")

  document.getElementById("donation-toggle-button").classList.remove("bg-donate")
  document.getElementById("history-toggle-button").classList.remove("bg-donate")

  document.getElementById(button_id).classList.add('bg-donate')
  document.getElementById(section_id).classList.remove('hidden')

}


function toggle_pages(event){
    if (event.target.innerText === "Blog"){
        event.target.innerText = "Home"
        document.getElementById('blog-section').classList.remove('hidden')
        document.getElementById('home-section').classList.add('hidden')
    }else{
        event.target.innerText = "Blog"
        document.getElementById('home-section').classList.remove('hidden')
        document.getElementById('blog-section').classList.add('hidden')

    }
}

function donate_form(event,id){
    event.preventDefault()
    const form = document.getElementById(id)
    donation_amount = parseInt(form.querySelector('input').value)
    balance = parseInt(document.getElementById('balance').innerText)
    if (donation_amount<0){
        alert("Negative Number Not Allowed")
    }else if (donation_amount === 0){
        alert("Must donate more than 0")
    }
    else if (donation_amount>balance){
        alert("You do not have sufficient balance")
    }
    else{
        let currentDateTime = new Date();
        let date = currentDateTime.toLocaleDateString();
        let time = currentDateTime.toLocaleTimeString();
        // fund
        fund = parseInt(form.parentElement.querySelector('.fund').innerText)
        fund += donation_amount
        form.parentElement.querySelector('.fund').innerText = fund

        donation_title = form.parentElement.querySelector('.donation-title').innerText
        document.getElementById("history-container").innerHTML += `
         <div class="border border-gray-100 rounded-lg p-5">
                <h2 class="text-lg font-bold">${donation_amount} Taka is Donated for ${donation_title}</h2>
                <p class="text-gray-100">Date : ${date} ${time} (Bangladesh Standard Time)</p>
            </div>`

        // modal
        document.getElementById('confirmation_modal').showModal()
        
   
        balance = balance - donation_amount
        document.getElementById('balance').innerText = balance
    }

   
}