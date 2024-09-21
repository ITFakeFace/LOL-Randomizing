import './RandomTeamPage.css';
import TextareaAutosize from 'react-textarea-autosize';
import { Box, Button, Checkbox, Collapse, Divider, Group } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShuffle } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { ResultPlayerTile } from './components/ResultPlayerTile';

export const RandomTeamPage = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const [team1, setTeam1] = useState([]);
  const [team2, setTeam2] = useState([]);
  const [animationKey, setAnimationKey] = useState(0); // State lưu trữ key cho animation

  const processPlayerName = (e) => {
    e.preventDefault();
    setTeam1([]);
    setTeam2([]);
    let inputNames = document.getElementById("txt-name").value;

    if (inputNames == null || inputNames.length === 0) {
      console.log("Error: Empty Names List");
      return;
    }

    // Split names into an array
    let nameList = inputNames.split("\n").map(name => name.trim()).filter(Boolean);

    // Remove duplicates
    nameList = [...new Set(nameList)];

    if (nameList.length % 2 !== 0) {
      console.log("Error: Number of players must be even");
      return;
    }

    let tempTeam1 = [];
    let tempTeam2 = [];
    let tempName = [...nameList];

    // Hàm thêm tuần tự tên vào các đội
    const addPlayerToTeams = () => {
      let start = 0;

      const intervalId = setInterval(() => {
        if (tempName.length === 0) {
          clearInterval(intervalId); // Dừng khi hết tên
          return;
        }

        let randomIndex = Math.floor(Math.random() * tempName.length);
        let selectedName = tempName[randomIndex];

        if (start % 2 === 0) {
          tempTeam1.push(selectedName);
          setTeam1([...tempTeam1]); // Cập nhật team1
        } else {
          tempTeam2.push(selectedName);
          setTeam2([...tempTeam2]); // Cập nhật team2
        }

        tempName.splice(randomIndex, 1); // Xóa tên đã chọn khỏi danh sách
        start++;
      }, 1000); // Cứ mỗi 500ms thì thêm 1 tên
    };

    addPlayerToTeams(); // Gọi hàm thêm tuần tự

    // Tăng giá trị key để làm mới animation
    setAnimationKey(prevKey => prevKey + 1);
  };

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
            <Box mx="auto" pt={20}>
              <Group justify="left" mb={10}>
                <Button onClick={toggle} bg={"transparent"} fz={"2.5rem"} color={"c0974f"}>
                  Setting
                </Button>
                <hr />
              </Group>
              <Divider my="md" mb={20} />
              <Collapse in={opened} transitionDuration={200} transitionTimingFunction="linear">
                <div>
                  <Checkbox defaultChecked label="Animated?" size='1.5rem' />
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
            <div className='col-md-5 result-box result-box-team-1' id='team1-box'>
              {team1.map((name, index) => (
                <>
                  {index !== 0 && <Divider size={"md"} />}
                  <ResultPlayerTile key={`${animationKey}-${index}`} name={name} />
                </>
              ))}
            </div>
            <div className='col-md-2 vs-title'>X</div>
            <div className='col-md-5 result-box result-box-team-2' id='team2-box'>
              {team2.map((name, index) => (
                <>
                  {index !== 0 && <Divider size={"md"} />}
                  <ResultPlayerTile key={`${animationKey}-${index + team1.length}`} name={name} />
                </>
              ))}
            </div>
          </div>
        </div>
      </div >
    </>
  );
};
