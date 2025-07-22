// prevent trustedHTML error
if (window.trustedTypes && window.trustedTypes.createPolicy) {
  window.trustedTypes.createPolicy('default', {
    createHTML: string => string,
    createScriptURL: string => string,
    createScript: string => string,
  })
}

let allVideoData = null
let selectedVideos = []
let buttons = []
let title = document.querySelector('title').innerHTML
title = title.replace(' - YouTube', '')

let removeButtonText = '<button id="remove-button" style="position:fixed;bottom:30px;right:30px;background-color:red;color:white;font-weight:bold;padding:10px;border:none;border-radius:10px;">Remove Selected</button>'
let refreshButtonText = '<button id="refresh-button" style="position:fixed;bottom:130px;right:30px;background-color:green;color:white;font-weight:bold;padding:10px;border:none;border-radius:10px;">Refresh Checkboxes</button>'
let removeUnavailableButtonText = '<button id="remove-unavailable-button" style="position:fixed;bottom:80px;right:30px;background-color:white;color:black;font-weight:bold;padding:10px;border:none;border-radius:10px;">Remove Unavailable Videos</button>'

document.body.insertAdjacentHTML('beforeend', refreshButtonText)
document.body.insertAdjacentHTML('beforeend', removeButtonText)
document.body.insertAdjacentHTML('beforeend', removeUnavailableButtonText)

let removeButton = document.querySelector('#remove-button')
let refreshButton = document.querySelector('#refresh-button')
let removeUnavailableButton = document.querySelector('#remove-unavailable-button')

function loadCheckboxes() {
  allVideoData = document.querySelectorAll('ytd-playlist-video-renderer')
  for (let videoData of allVideoData) {
    let leftSideBar = videoData.querySelector('#index-container')
    leftSideBar.innerHTML = '<input type="checkbox" style="width:1.5em;height:1.5em;margin:1em;">'
  }
  selectedVideos = []
}

function getSelectedVideos() {
  for (let data of allVideoData) {
    let checkBox = data.querySelector('input[type="checkbox"]')
    if (checkBox.checked) {
      selectedVideos.push(data)
    }
  }
}

async function clickToRemove() {
  let count = buttons.length;
  for (let button of buttons) {
    button.click()
    // wait for options menu to pop up
    await new Promise(resolve => setTimeout(resolve, 100))
    let options = document.querySelectorAll('ytd-menu-service-item-renderer')
    for (let option of options) {
      if (option.innerHTML.includes('Remove')) {
        option.click()
        break
      }
    }
    // wait for item deletion to be completed before moving on
    await new Promise(resolve => setTimeout(resolve, 200))
  }
  console.log(`${count} video(s) removed from ${title}.`)
}

function removeSelectedVideos() {
  getSelectedVideos()
  removeVideos(selectedVideos)
}

function removeVideos(videosToRemove) {
  buttons = []
  for (let videoData of videosToRemove) {
    buttons.push(videoData.querySelector('button'))
  }
  clickToRemove()
  loadCheckboxes()
}

function removeUnavailableVideos() {
  // unavailable videos are either deleted or privated videos you don't have access to
  let unavailableVideos = []
  for (let data of allVideoData) {
    if (data.innerHTML.includes('[Private video]') || data.innerHTML.includes('[Deleted video]')) {
      unavailableVideos.push(data)
    }
  }
  removeVideos(unavailableVideos)
}

refreshButton.addEventListener('click', loadCheckboxes)
removeButton.addEventListener('click', removeSelectedVideos)
removeUnavailableButton.addEventListener('click', removeUnavailableVideos)

loadCheckboxes()