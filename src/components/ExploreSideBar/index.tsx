import * as S from './styles'

import Button from 'components/Button'
import Checkbox from 'components/Checkbox'
import Heading from 'components/Heading'
import Radio from 'components/Radio'

const ExploreSideBar = () => (
  <S.Wrapper>
    <Heading lineBottom lineColor="secondary" size="small">
      Price
    </Heading>
    <Checkbox
      name="under-50"
      label="Under $50"
      labelFor="under-50"
      labelColor="white"
    />
    <Checkbox
      name="under-100"
      label="Under $100"
      labelFor="under-100"
      labelColor="white"
    />
    <Checkbox
      name="under-150"
      label="Under $150"
      labelFor="under-150"
      labelColor="white"
    />
    <Checkbox
      name="under-200"
      label="Under $200"
      labelFor="under-200"
      labelColor="white"
    />
    <Checkbox name="free" label="Free" labelFor="free" labelColor="white" />
    <Checkbox
      name="discounted"
      label="Discounted"
      labelFor="discounted"
      labelColor="white"
    />

    <Heading lineBottom lineColor="secondary" size="small">
      Sort by
    </Heading>
    <Radio
      label="High to low"
      labelFor="high-to-low"
      labelColor="white"
      id="high-to-low"
      name="sort-by"
      value="high-to-low"
    />
    <Radio
      label="Low to high"
      labelFor="low-to-high"
      labelColor="white"
      id="low-to-high"
      name="sort-by"
      value="low-to-high"
    />
    <Heading lineBottom lineColor="secondary" size="small">
      System
    </Heading>
    <Checkbox
      name="windows"
      label="Windows"
      labelFor="windows"
      labelColor="white"
    />
    <Checkbox name="linux" label="Linux" labelFor="linux" labelColor="white" />
    <Checkbox name="mac" label="MAC" labelFor="mac" labelColor="white" />
    <Heading lineBottom lineColor="secondary" size="small">
      Genre
    </Heading>
    <Checkbox
      name="action"
      label="Action"
      labelFor="action"
      labelColor="white"
    />
    <Checkbox
      name="adventure"
      label="Adventure"
      labelFor="adventure"
      labelColor="white"
    />
    <Checkbox name="fps" label="FPS" labelFor="fps" labelColor="white" />

    <Button fullWidth size="medium">
      Filter
    </Button>
  </S.Wrapper>
)

export default ExploreSideBar
