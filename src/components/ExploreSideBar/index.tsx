import * as S from './styles'

import Button from 'components/Button'
import Checkbox from 'components/Checkbox'
import Heading from 'components/Heading'
import Radio from 'components/Radio'
import { useState } from 'react'

export type ItemProps = {
  title: string
  name: string
  type: string
  fields: Field[]
}

type Field = {
  label: string
  name: string
}

type Values = {
  [field: string]: boolean | string
}

export type ExploreSideBarProps = {
  items: ItemProps[]
  initialValues?: Values
  onFilter: (values: Values) => void
}

const ExploreSideBar = ({
  items,
  onFilter,
  initialValues = {}
}: ExploreSideBarProps) => {
  const [values, setValues] = useState(initialValues)

  const handleChange = (name: string, value: string | boolean) => {
    setValues((previousValue) => ({ ...previousValue, [name]: value }))
  }

  const handleFilter = () => {
    onFilter(values)
  }

  return (
    <S.Wrapper>
      {items.map((item) => (
        <div key={item.name}>
          <Heading lineBottom lineColor="secondary" size="small">
            {item.title}
          </Heading>

          {item.type === 'checkbox' &&
            item.fields.map((field) => (
              <Checkbox
                key={field.name}
                name={field.name}
                label={field.label}
                labelFor={field.name}
                labelColor="white"
                isChecked={!!values[field.name]}
                onCheck={(value) => handleChange(field.name, value)}
              />
            ))}

          {item.type === 'radio' &&
            item.fields.map((field) => (
              <Radio
                key={field.name}
                id={field.name}
                value={field.name}
                name={item.name}
                label={field.label}
                labelFor={field.name}
                labelColor="white"
                defaultChecked={field.name === values[item.name]}
                onChange={() => handleChange(item.name, field.name)}
              />
            ))}
        </div>
      ))}

      <Button fullWidth size="medium" onClick={handleFilter}>
        Filter
      </Button>
    </S.Wrapper>
  )
}

export default ExploreSideBar
