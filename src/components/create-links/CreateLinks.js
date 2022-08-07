import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { Link, withRouter } from 'react-router-dom'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import {
  TextField,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  IconButton,
  Grid,
  Container,
  Typography,
  Button,
  Chip,
  Card,
  StylesProvider,
} from '@material-ui/core'
import './CreateLinks.css'
import imgPlaceHolder from '../../images/imgPlaceHolder.png'
import { createPhase } from '../../../src/Phase/createPhase'

function CreateLinks({ currentAccount }) {
  console.log('CreateLinks currentAccount', currentAccount)
  const [twitter, setTwitter] = useState('')
  const [instagram, setInstagram] = useState('')
  const [linkArray, setLinkArray] = useState([])
  const [description, setDescription] = useState('')
  const [url, setUrl] = useState('')
  console.log(
    'twitter,instagram, linkArray =====',
    twitter,
    instagram,
    linkArray,
  )
  const requestFollow = (e) => {
    e.preventDefault()
    console.log('requestFollow')
  }

  const createProfile = async () => {
    // create profile
    let username = 'electrone'
    let avatar = 'https://i.imgur.com/62G0yQ0.jpeg'
    let banner = 'https://i.imgur.com/25zhGbg.jpeg'
    let bio =
      'I am a software developer who enjoys web and mobile development through universal components. By day I love to code and drinking tea. At night I sleep.'
    let links = [
      ['Website', 'https://www.sophiebritt.com/'],
      ['GitHub', 'https://github.com/ryansea'],
    ]
    let address = currentAccount
    const res = await createPhase(address, username, avatar, banner, bio, links)
    console.log(' res', res)
  }

  const save = async () => {
    let twitterData = []
    let instagramData = []
    let newArr = []

    if (twitter) {
      twitterData = ['Twitter', `https://twitter.com/${twitter}`]
      newArr.push(twitterData)
    }

    if (instagram) {
      instagramData = ['Instagram', `https://www.instagram.com/${instagram}`]
      newArr.push(instagramData)
    }

    setLinkArray([...linkArray, ...newArr])

    createProfile()
  }

  const addTwoInputs = () => {
    const temp = [description, url]
    setLinkArray([...linkArray, temp])
    setDescription('')
    setUrl('')
  }

  return (
    <StylesProvider injectFirst>
      <Container
        className="root-pet-details"
        style={{ minHeight: '50vh', paddingBottom: '3rem' }}
      >
        <center>
          <Card
            style={{
              maxWidth: '500px',
              padding: '2rem',
              paddingBottom: '3rem',
              borderRadius: '13px',
              textAlign: 'start',
            }}
          >
            <div className="">
              <Button
                className="whiteLink-no-active"
                component={Link}
                to="/create"
              >
                Appearance
              </Button>

              <Button className="whiteLink" component={Link} to="/create-links">
                Links
              </Button>
            </div>
            <br />

            <hr style={{ border: '1px solid #ccc' }} />
            <br />
            <p>
              <label htmlFor="fname">Twitter</label>
            </p>
            <input
              type="text"
              id="fname"
              name="username"
              placeholder="@"
              value={twitter}
              onChange={(e) => setTwitter(e.target.value)}
              className="create-profile-input"
            ></input>

            <br />
            <p>
              <label htmlFor="fname">Instagram</label>
            </p>
            <input
              type="text"
              id="fname"
              name="Username"
              placeholder="@"
              className="create-profile-input"
              value={instagram}
              onChange={(e) => setInstagram(e.target.value)}
            ></input>
            <br />
            <br />
            <br />

            {/* NEW LINK */}
            <div style={{ display: 'flex' }}>
              <div style={{ width: '100%' }}>
                <p>
                  <label htmlFor="fname">Description</label>
                </p>
                <input
                  type="text"
                  id="fname"
                  name="description"
                  placeholder=""
                  className="add-link-input"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></input>
              </div>

              <div style={{ width: '100%' }}>
                <p>
                  <label htmlFor="fname">URL</label>
                </p>
                <input
                  type="text"
                  id="fname"
                  name="URL"
                  placeholder=""
                  className="add-link-input"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                ></input>
              </div>
            </div>

            <br />
            <br />
            <Button
              className="whiteLink"
              variant="contained"
              onClick={addTwoInputs}
            >
              + Add new link
            </Button>

            <br />
            <br />
            <br />
            <hr style={{ border: '1px solid #ccc' }} />
            <br />
            <center>
              <Button className="whiteLink" component={Link} to="/">
                Nevermind
              </Button>
              <Button className="phase-btn" variant="contained" onClick={save}>
                Save
              </Button>
            </center>
          </Card>
        </center>
      </Container>
    </StylesProvider>
  )
}

export default CreateLinks
