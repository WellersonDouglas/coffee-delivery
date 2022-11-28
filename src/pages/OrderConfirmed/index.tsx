import { RegularText, TitleText } from '../../components/Typography'
import { OrderConfirmedContainer, OrderDetailsContainer } from './styles'
import confirmedOrderIllustration from '../../assets/confirmed-order.svg'
import { InfoWithIcon } from '../../components/InfoWithIcon'
import { useTheme } from 'styled-components'
import { Clock, CreditCard, MapPin } from 'phosphor-react'

export function OrderConfirmedPage() {
  const { colors } = useTheme()
  return (
    <OrderConfirmedContainer className="container">
      <div>
        <TitleText size="l">Uhu! Pedido confirmado</TitleText>
        <RegularText size="l" color="subtitle">
          Agora é só aguardar que logo o café chegará até você
        </RegularText>
      </div>

      <section>
        <OrderDetailsContainer>
          <InfoWithIcon
            icon={<MapPin weight="fill" />}
            iconBg={colors['brand-purple']}
            text={
              <RegularText>
                Entrega em <strong>Rua Luís de Camões, 26 3-F</strong>
                <br />
                Arrentela - Seixal, Setubal
              </RegularText>
            }
          />

          <InfoWithIcon
            icon={<Clock weight="fill" />}
            iconBg={colors['brand-yellow']}
            text={
              <RegularText>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </RegularText>
            }
          />

          <InfoWithIcon
            icon={<CreditCard weight="fill" />}
            iconBg={colors['brand-yellow']}
            text={
              <RegularText>
                Pagamento na entrega
                <br />
                <strong>Cartão de Crédito</strong>
              </RegularText>
            }
          />
        </OrderDetailsContainer>
        <img src={confirmedOrderIllustration} alt="" />
      </section>
    </OrderConfirmedContainer>
  )
}
