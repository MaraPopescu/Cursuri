console.log("JS is running!");
const token = window.localStorage.getItem("token");
if (!token || token.length <= 0) {
  window.location.href = "./login.html";
}

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then(async (posts) => {
    const elementSectiunePostari = document.getElementById("sectiune_postari");
    let htmlPostari = "";
    for (let i = 0; i < posts.length; i++) {
      const htmlPostare = await inserarePostare(posts[i]);
      htmlPostari = htmlPostari + htmlPostare;
    }
    elementSectiunePostari.innerHTML = htmlPostari;
  });

async function getUserInformation(userId) {
  const jsonDatas = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + userId
  );
  const user = await jsonDatas.json();
  console.log(user);
  return user;
}

async function inserarePostare(postare) {
  const userInformation = await getUserInformation(postare.userId);

  //creati inca o fun ca getuserinformation o putem numi getcomments   const comenatripostare  =await getcomments(postare.id) si se inlocuieste partea de comentarii din cars. trb creata alta functie care sa aduca informatii de postare?
  // o noua dunctie apelata aici care ne va da htmlul pt toate comentariile   ex.: const htmlComm = getHtmlComm (comenariPostare)
  //functia getHTMLcomentarii va aduce un string cu comentariile
  //pt com link /comments?postId
  return `
   <div class='card'>
    <div class='card_header'>
      <div class='persona'>
        <img src='https://picsum.photos/200' alt='Imagine persoana' />
        <div class='persona_text'>
          <p class='normal_text'>${userInformation.name}</p>
          <p class='small_text'>${userInformation.phone} / ${userInformation.email}</p>
        </div>
      </div>
      <div class='more_info'>
        <i data-feather='more-horizontal'></i>
      </div>
    </div>
    <div class='card_body'>
      <p class='normal_text mb-4'>
        ${postare.body}
      </p>
      <img
        src='https://picsum.photos/seed/description_${postare.id}/700'
        alt='descriere postare'
      />
    </div>
    <div class='card_footer'>
      <div class='action_bar'>
        <div>Like</div>
        <div>Comment</div>
        <div>Subscribe</div>
      </div>
      <div class='comment_section'>
        <div class='my_comment'>
          <img
            src='https://picsum.photos/seed/description_1/300'
            alt='my image'
          />
          <input type='text' placeholder='Write your comment' />
        </div>
        <div class='other_comments'>
        
          <div class='comment_persona'>
            <img src='https://picsum.photos/200' alt='Imagine persoana' />
            <div class='persona_text'>
              <p class='normal_text'>Mara Popescu</p>
              <p class='small_text'>5h ago.</p>
              <p class='small_text'>
                The standard Lorem Ipsum passage, used since the 1500s "Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do."
              </p>
            </div>
          </div>
        </div>
        <div class='last_part'>
          <div class='like_button'>
            <i data-feather='thumbs-up'></i>
            <p>Like</p>
          </div>
          <div class='comment_button'>
            <i data-feather='message-square'></i>
            <p>Comment</p>
          </div>
        </div>
      </div>
    </div>
  </div>;
  `;
}

function logout() {
  window.localStorage.removeItem("token");
  window.location.href = "./login.html";
}
