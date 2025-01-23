const btn=document.getElementById('btn')
const inEle=document.getElementById('inp');
const count=document.getElementById('count')
function change()
{
    document.body.classList.toggle('dark');
    if (btn.textContent == "Dark")
        {
            btn.textContent="light"
        }
        else
        {
                    btn.textContent = "Dark"
        }
    }
    
   