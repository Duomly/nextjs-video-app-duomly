export default function Sidebar() {
  return (
    <div className='bg-light p-4 vh-100 text-secondary menu-padding'>
      <div
        class='nav flex-column nav-pills'
        id='v-pills-tab'
        role='tablist'
        aria-orientation='vertical'
      >
        <a
          class='nav-link'
          id='v-pills-home-tab'
          data-toggle='pill'
          href='#v-pills-home'
          role='tab'
          aria-controls='v-pills-home'
          aria-selected='true'
        >
          <svg
            width='1em'
            height='1em'
            viewBox='0 2 16 16'
            class='bi bi-house-door-fill text-danger mr-2'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M6.5 10.995V14.5a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V11c0-.25-.25-.5-.5-.5H7c-.25 0-.5.25-.5.495z' />
            <path
              fill-rule='evenodd'
              d='M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z'
            />
          </svg>{' '}
          <span className='font-weight-bolder'>Home</span>
        </a>
        <a
          class='nav-link'
          id='v-pills-profile-tab'
          data-toggle='pill'
          href='#v-pills-profile'
          role='tab'
          aria-controls='v-pills-profile'
          aria-selected='false'
        >
          <svg
            width='1em'
            height='1em'
            viewBox='0 2 16 16'
            class='bi bi-bar-chart-line-fill mr-2'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              d='M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2z'
            />
          </svg>{' '}
          Trending
        </a>
        <a
          class='nav-link'
          id='v-pills-messages-tab'
          data-toggle='pill'
          href='#v-pills-messages'
          role='tab'
          aria-controls='v-pills-messages'
          aria-selected='false'
        >
          <svg width="1em" height="1em" viewBox="0 2 16 16" class="bi bi-music-note-beamed mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z"/>
  <path fill-rule="evenodd" d="M14 11V2h1v9h-1zM6 3v10H5V3h1z"/>
  <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z"/>
</svg> Music
        </a>
        <a
          class='nav-link'
          id='v-pills-settings-tab'
          data-toggle='pill'
          href='#v-pills-settings'
          role='tab'
          aria-controls='v-pills-settings'
          aria-selected='false'
        >
          <svg width="1em" height="2em" viewBox="0 2 16 16" class="bi bi-gear-fill mr-2 h-100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 0 0-5.86 2.929 2.929 0 0 0 0 5.858z"/>
</svg> Settings
        </a>
      </div>
      <hr></hr>
      <p className='font-weight-bold'>Library</p>
      <div
        class='nav flex-column nav-pills'
        id='v-pills-tab'
        role='tablist'
        aria-orientation='vertical'
      >
        <a
          class='nav-link'
          id='v-pills-home-tab'
          data-toggle='pill'
          href='#v-pills-home'
          role='tab'
          aria-controls='v-pills-home'
          aria-selected='true'
        >
          <svg
            width='1em'
            height='2em'
            viewBox='0 2 16 16'
            class='bi bi-clock-history mr-2'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              d='M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z'
            />
            <path
              fill-rule='evenodd'
              d='M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z'
            />
            <path
              fill-rule='evenodd'
              d='M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z'
            />
          </svg>{' '}
          History
        </a>
        <a
          class='nav-link'
          id='v-pills-profile-tab'
          data-toggle='pill'
          href='#v-pills-profile'
          role='tab'
          aria-controls='v-pills-profile'
          aria-selected='false'
        >
          <svg
            width='1em'
            height='1em'
            viewBox='0 2 16 16'
            class='bi bi-stopwatch-fill mr-2'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              d='M6.5 0a.5.5 0 0 0 0 1H7v1.07A7.001 7.001 0 0 0 8 16 7 7 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm2 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5V5.6z'
            />
          </svg>{' '}
          Watch later
        </a>
      </div>
      <hr></hr>
      <p className='font-weight-bold'>Subscriptions</p>
      <div
        class='nav flex-column nav-pills'
        id='v-pills-tab'
        role='tablist'
        aria-orientation='vertical'
      >
        <a
          class='nav-link'
          id='v-pills-home-tab'
          data-toggle='pill'
          href='#v-pills-home'
          role='tab'
          aria-controls='v-pills-home'
          aria-selected='true'
        >
          <svg width="1em" height="2em" viewBox="0 2 16 16" class="bi bi-camera-reels-fill mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M0 8a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8z"/>
  <circle cx="3" cy="3" r="3"/>
  <circle cx="9" cy="3" r="3"/>
</svg> Videos
        </a>
        <a
          class='nav-link'
          id='v-pills-profile-tab'
          data-toggle='pill'
          href='#v-pills-profile'
          role='tab'
          aria-controls='v-pills-profile'
          aria-selected='false'
        >
          <svg width="1em" height="2em" viewBox="0 2 16 16" class="bi bi-signpost-2-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M7 1.414V16h2V1.414a1 1 0 0 0-2 0z"/>
  <path d="M1 3a1 1 0 0 1 1-1h11.5a1 1 0 0 1 .8.4l.975 1.3a.5.5 0 0 1 0 .6L14.3 5.6a1 1 0 0 1-.8.4H2a1 1 0 0 1-1-1V3zm14 5a1 1 0 0 0-1-1H2.5a1 1 0 0 0-.8.4L.725 8.7a.5.5 0 0 0 0 .6l.975 1.3a1 1 0 0 0 .8.4H14a1 1 0 0 0 1-1V8z"/>
</svg> Travel
        </a>
        <a
          class='nav-link'
          id='v-pills-messages-tab'
          data-toggle='pill'
          href='#v-pills-messages'
          role='tab'
          aria-controls='v-pills-messages'
          aria-selected='false'
        >
          <svg width="1em" height="1em" viewBox="0 2 16 16" class="bi bi-music-note-beamed mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z"/>
  <path fill-rule="evenodd" d="M14 11V2h1v9h-1zM6 3v10H5V3h1z"/>
  <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z"/>
</svg> Music
        </a>
        <a
          class='nav-link'
          id='v-pills-settings-tab'
          data-toggle='pill'
          href='#v-pills-settings'
          role='tab'
          aria-controls='v-pills-settings'
          aria-selected='false'
        >
          <svg width="1em" height="2em" viewBox="0 2 16 16" class="bi bi-emoji-laughing mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path fill-rule="evenodd" d="M12.331 9.5a1 1 0 0 1 0 1A4.998 4.998 0 0 1 8 13a4.998 4.998 0 0 1-4.33-2.5A1 1 0 0 1 4.535 9h6.93a1 1 0 0 1 .866.5z"/>
  <path d="M7 6.5c0 .828-.448 0-1 0s-1 .828-1 0S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 0-1 0s-1 .828-1 0S9.448 5 10 5s1 .672 1 1.5z"/>
</svg> Comedy
        </a>
      </div>
    </div>
  );
}
