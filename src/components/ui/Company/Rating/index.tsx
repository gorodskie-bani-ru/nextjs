import React, { useMemo } from 'react'
import { useContext } from 'react'
import { AppContext } from 'src/pages/_App/Context'
import { CompanyRatingProps } from './interfaces'
import { CompanyRatingStyled } from './styles'
import StarIcon from '@material-ui/icons/Star'
import StarEmptyIcon from '@material-ui/icons/StarBorder'
import StarHalfIcon from '@material-ui/icons/StarHalf'

/**
 * Рейтинг компании (звездочки)
 */
const CompanyRating: React.FC<CompanyRatingProps> = ({
  company,
  allowEdit = false,
  ...other
}) => {
  const context = useContext(AppContext)

  // const [inEditMode] = useState(false);

  return useMemo(() => {
    /**
     * Пока что данные рейтингов в контексте находятся
     */
    const rating = context?.appData?.companies_rating.find(
      (n) => n.target_id === company.id
    )?.avg.voteValueAvg

    if (!rating) {
      return null
    }

    // if (inEditMode) {
    //   rating = editedRating || 0
    // }

    const stars: JSX.Element[] = []

    const values = [1, 2, 3, 4, 5]

    values.forEach((i) => {
      let Icon
      let color: 'secondary' | 'primary' = 'primary'

      if (i <= rating + 0.3) {
        Icon = StarIcon
        color = 'secondary'
      } else if (rating - i >= -0.7) {
        Icon = StarHalfIcon
        color = 'secondary'
      } else {
        Icon = StarEmptyIcon
      }

      const star = (
        <Icon
          // onMouseOver={(event) => {
          //   this.setState({
          //     editedRating: i,
          //   })
          // }}
          key={i}
          color={color}
          style={{
            cursor: allowEdit ? 'pointer' : 'inherit',
          }}
        />
      )

      stars.push(star)
    })

    return <CompanyRatingStyled {...other}>{stars}</CompanyRatingStyled>
  }, [allowEdit, company.id, context?.appData?.companies_rating, other])
}

export default CompanyRating
