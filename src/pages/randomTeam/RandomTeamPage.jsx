import './RandomTeamPage.css';
import TextareaAutosize from 'react-textarea-autosize';
import { Box, Button, Checkbox, Collapse, Divider, Group } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShuffle } from '@fortawesome/free-solid-svg-icons'; // Nhập icon từ gói solid
import { useDisclosure } from '@mantine/hooks';
import { forEach } from 'underscore';
import { elements } from 'chart.js';
import { ResultPlayerTile } from './components/ResultPlayerTile';

export const RandomTeamPage = ({ }) => {
  const [opened, { toggle }] = useDisclosure(false);
  const processPlayerName = (e) => {
    e.preventDefault();
    let inputNames = document.getElementById("txt-name").value;
    if (inputNames == null || inputNames.length == 0) {
      console.log("Error: Empty Names List");
      return;
    }
    let nameList = inputNames.split("\n");
    for (let i = 0; i < nameList.length; i++) {
      //trim names
      let element = nameList[i].trim()
      nameList[i] = element;
      if (nameList[i].length == 0 || (nameList.indexOf(element) != -1 && nameList.indexOf(element) != i)) {
        nameList.splice(i--, 1);
        continue;
      }
    }

    console.log(`nameList before: ${nameList}`);
    //if nameList has odd number of names => return
    if (nameList.length % 2 != 0) {
      console.log("Error: Number of player must be even");
      return;
    }

    //separate to 2 team
    let start = 0;
    let team1 = [];
    let team2 = [];
    let tempName = nameList;
    while (tempName.length > 0) {
      let randomIndex = Math.floor(Math.random() * tempName.length);
      if (start % 2 == 0) {
        team2.push(tempName[randomIndex]);
      } else {
        team1.push(tempName[randomIndex]);
      }
      start++;
      tempName.splice(randomIndex, 1);
    }

    console.log(`nameList: ${nameList}`);
    console.log(`team1: ${team1}`);
    console.log(`team2: ${team2}`);
  }
  return (
    <>
      <div className='player-form-container'>
        <form onSubmit={(event) => processPlayerName(event)} action='' className='form-name'>
          <div>
            <label htmlFor="txt-name" className='lbl-name'>Players' name</label>
          </div>
          <div>
            <TextareaAutosize
              className="txt-name"
              id='txt-name'
              placeholder="Enter Players' name"
            />
          </div>
          <div>
            <Box maw={"100%"} mx="auto" pt={20}>
              <Group justify="left" mb={10}>
                <Button onClick={toggle} bg={"transparent"} fz={"2.5rem"} color={"c0974f"}>
                  Setting
                </Button>
                <hr />
              </Group>
              <Divider my="md" mb={20} />
              <Collapse in={opened} transitionDuration={200} transitionTimingFunction="linear">
                <div>
                  <Checkbox
                    defaultChecked
                    className='cb-random-setting'
                    label="Animated ?"
                    size='1.5rem'
                  />
                  {/* <Checkbox
                    defaultChecked
                    label="Balanced Team"
                  />
                  <Checkbox
                    defaultChecked
                    label="I agree to sell my privacy"
                  /> */}
                </div>
              </Collapse>
            </Box>
          </div>
          <div className="btn-name-container">
            <Button className='btn-name' type='submit'>
              <span className="btn-name-text">Randomize</span>
              <FontAwesomeIcon icon={faShuffle} className="btn-name-icon" />
            </Button>
          </div>
        </form >
      </div >
      <div className='result-box-container'>
        <div className='result-box-content'>
          <h1 className='lbl-result'>Result</h1>
          <Divider my="md" mb={20} />
          <div className='result-boxes row'>
            <div className='col-5 result-box'>
              <ResultPlayerTile name={"ITFakeFace"} />
            </div>
            <div className='col-2 vs-title'>X</div>
            <div className='col-5 result-box'></div>
          </div>
        </div>
      </div>
    </>
  )
}